import { canvas } from "./Canvas.js";
//TODO: check all the methods, divide method to two kinds, side effect or return a value, centralizing where the side effects occur
interface IBall {
  /**
   * @effects change this.x, this.y every frame to move the ball
   * @param {number} x - get the paddle's current x position to detect collision
   * @param {number} width - get the paddle's width to detect collision
   * @param {number} height - get the paddle's height to detect collision
   */
  moveBall(speed: number): void;
}

export class Ball implements IBall {
  private moveX = 1;
  private moveY = -1;
  public static ballRadius = 12;
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  public moveBall(speed: number): void {
    this._x += this.moveX * speed;
    this._y += this.moveY * speed;
  }

  public drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  public reverseXIncrement(): void {
    this.moveX = -this.moveX;
  }

  public reverseYIncrement(): void {
    this.moveY = -this.moveY;
  }

  public detectCollisionWithWall(): void {
    if (
      this._x > canvas.width - Ball.ballRadius ||
      this._x < Ball.ballRadius
    ) {
      this.reverseXIncrement();
    }

    if (this._y < Ball.ballRadius) {
      this.reverseYIncrement();
    }
  }

  public detectCollisionWithPaddle(
    x: number,
    width: number,
    height: number
  ): void {
    if (
      this._y > canvas.height - Ball.ballRadius - height &&
      this._x > x &&
      this._x < x + width
    ) {
      this.reverseYIncrement();
    }
  }

  public detectCollisionWithBrick(): void {
    
  }
}
