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
// Need to extract all the constant to a new file, it will be better
const paddleWidth = 80;
const paddleHeight = 10;
const ballStartX = canvas.width / 2;
const ballStartY = canvas.height - Ball.ballRadius - paddleHeight;
const paddleStartX = (canvas.width - paddleWidth) / 2;
const paddleStartY = canvas.height - paddleHeight;

export class Game implements IGame {
  private ball: Ball;
  private paddle: Paddle;
  private brickMatrix: BrickMatrix;
  private animationFrameId: number | null = null;
  private isPaused: boolean = false;
  private isRunning: boolean = false;
  private lastTime: number = 0;
  private speedMultiplier: number = 0.4;
  private _lives: number;

  constructor() {
    this._lives = 3;
    this.brickMatrix = new BrickMatrix();
    this.ball = new Ball(ballStartX, ballStartY);
    this.paddle = new Paddle(
      paddleStartX,
      paddleStartY,
      paddleWidth,
      paddleHeight
    );
    this.startGame();
  }

  public get lives() {
    return this._lives;
  }

  private resetBall(): void {
    this.ball = new Ball(ballStartX, ballStartY);
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
        this.paddle.movePaddle();

        this.ball.moveBall(this.speedMultiplier * deltaTime);
        if (
          this.ball.isBallCollideFloor(
            this.paddle.x,
            this.paddle.width,
            this.paddle.height
          )
        ) {
          if (this._lives > 0) {
            this._lives--;
            this.resetBall();
          } else {
            this.endGame();
            this.showGameOver();
          }
        }
        this.ball.detectCollisionWithWall();
        this.ball.detectCollisionWithPaddle(
          this.paddle.x,
          this.paddle.width,
          this.paddle.height
        );
        this.ball.detectCollisionWithBrickMatrix(this.brickMatrix);
        this.ball.drawBall(this.ball.x, this.ball.y);

        this.brickMatrix = this.brickMatrix.removeCollideBrick(
          this.ball.x,
          this.ball.y
        );
        this.brickMatrix.drawMatrix();
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
    canvas.ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
  }

  public setSpeedMultiplier(speed: number = 1): void {
    this.speedMultiplier = speed;
  }
}
