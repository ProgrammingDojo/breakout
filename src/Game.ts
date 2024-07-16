import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
import { BrickMatrix } from "./Bricks.js";
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
  private brickMatrix: BrickMatrix;
  private animationFrameId: number | null = null;
  private isPaused: boolean = false;
  private isRunning: boolean = false;
  private lastTime: number = 0;
  private speedMultiplier: number = 0.4;

  constructor() {
    const width = 80;
    const height = 10;
    const ballStartX = canvas.width / 2;
    const ballStartY = canvas.height - Ball.ballRadius - height;
    const paddleStartX = (canvas.width - width) / 2;
    const paddleStartY = canvas.height - height;
    this.brickMatrix = new BrickMatrix();
    this.ball = new Ball(ballStartX, ballStartY);
    this.paddle = new Paddle(paddleStartX, paddleStartY, width, height);
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
        canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.brickMatrix.drawMatrix();
        this.paddle.movePaddle();
        const movedBall = this.ball.moveBall(this.speedMultiplier * deltaTime);
        const wallDetectedBall = movedBall.detectCollisionWithWall(movedBall);
        wallDetectedBall.drawBall(wallDetectedBall.x, wallDetectedBall.y);
        this.ball = wallDetectedBall;
        this.brickMatrix.collideBrick(this.ball.x, this.ball.y);
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
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.ctx.font = "bold 48px serif";
    canvas.ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
  }

  public setSpeedMultiplier(speed: number = 1): void {
    this.speedMultiplier = speed;
  }
}
