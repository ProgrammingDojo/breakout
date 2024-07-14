import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";

interface IGame {
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  endGame: () => void;
  setSpeedMultiplier: (speed: number) => void;
  showGameOver: () => void;
}

export class Game implements IGame {
  private ball: Ball;
  private paddle: Paddle;
  private animationFrameId: number | null = null;
  private isPaused: boolean = false;
  private isRunning: boolean = false;
  private lastTime: number = 0;
  private speedMultiplier: number = 0.4;

  constructor() {
    const ballRadius = 12;
    const paddleSelfWidth = 80;
    const paddleSelfHeight = 10;
    const ballStartX = canvas.canvasWidth / 2;
    const ballStartY = canvas.canvasHeight - ballRadius - paddleSelfHeight;
    const paddleStartX = (canvas.canvasWidth - paddleSelfWidth) / 2;
    const paddleStartY = canvas.canvasHeight - paddleSelfHeight;

    this.ball = new Ball(ballStartX, ballStartY, ballRadius);
    this.paddle = new Paddle(
      paddleStartX,
      paddleStartY,
      paddleSelfWidth,
      paddleSelfHeight
    );
    this.startGame();
  }

  public startGame(): void {
    this.isRunning = true;
    const animate = (currentTime: DOMHighResTimeStamp) => {
      if (this.isPaused || !this.isRunning) {
        return;
      }

      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;

      if (deltaTime > 0) {
        canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
        this.paddle.movePaddle();
        this.ball.moveBall(
          this.paddle.paddleX,
          this.paddle.paddleSelfWidth,
          this.paddle.paddleSelfHeight,
          this.speedMultiplier * deltaTime
        );
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.lastTime = performance.now();
    this.animationFrameId = requestAnimationFrame(animate);
  }

  public pauseGame(): void {
    this.isPaused = true;
  }

  public resumeGame(): void {
    if (this.isPaused) {
      this.isPaused = false;
      if (this.animationFrameId === null) {
        this.animationFrameId = requestAnimationFrame(this.startGame);
      }
    }
  }

  public endGame(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public showGameOver(): void {
    canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
    canvas.ctx.font = "bold 48px serif";
    canvas.ctx.fillText(
      "Game Over",
      canvas.canvasWidth / 2,
      canvas.canvasHeight / 2
    );
  }

  public setSpeedMultiplier(speed: number = 1): void {
    this.speedMultiplier = speed;
  }
}
