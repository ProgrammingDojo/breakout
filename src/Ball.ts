import { canvas } from "./Canvas.js";

interface IBall {
  /**
   * @effects change this.x, this.y every frame to move the ball
   * @param {number} paddleX - get the paddle's current x position to detect collision
   * @param {number} paddleSelfWidth - get the paddle's width to detect collision
   * @param {number} paddleSelfHeight - get the paddle's height to detect collision
   */
  moveBall(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number,
    speed: number
  ): void;
}

export class Ball implements IBall {
  private moveX = 1;
  private moveY = -1;
  public static ballRadius = 12;
  constructor(private _x: number, private _y: number) {}

  get ballX() {
    return this._x;
  }

  get ballY() {
    return this._y;
  }

  public moveBall(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number,
    speed: number
  ): void {
    this._x += this.moveX * speed;
    this._y += this.moveY * speed;
    this.detectCollision(paddleX, paddleSelfWidth, paddleSelfHeight);
    this.drawBall(this._x, this._y);
  }

  private drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  private detectCollision(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number
  ): void {
    if (
      this._x > canvas.canvasWidth - Ball.ballRadius ||
      this._x < Ball.ballRadius
    ) {
      this.moveX = -this.moveX;
    }

    if (this._y < Ball.ballRadius) {
      this.moveY = -this.moveY;
    }
    if (
      this._y > canvas.canvasHeight - Ball.ballRadius - paddleSelfHeight &&
      this._x > paddleX &&
      this._x < paddleX + paddleSelfWidth
    ) {
      this.moveY = -this.moveY;
    }
  }
}
