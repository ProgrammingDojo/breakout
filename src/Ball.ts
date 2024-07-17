import { canvas } from "./Canvas.js";
//TODO: check all the methods, divide method to two kinds, side effect or return a value, centralizing where the side effects occur
interface IBall {
  moveBall(speed: number): void;
}

export class Ball implements IBall {
  public static ballRadius = 12;
  private _moveX: number = 1;
  private _moveY: number = -1;
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  public moveBall(speed: number): void {
    this._x += this._moveX * speed;
    this._y += this._moveY * speed;
  }

  public drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  private isBallCollideHorizontalWall(): boolean {
    if (this._x > canvas.width - Ball.ballRadius || this._x < Ball.ballRadius) {
      return true;
    }
    return false;
  }

  private isBallCollideCeiling(): boolean {
    if (this._y < Ball.ballRadius) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param ball the current ball
   * @returns a new ball after examined whether collide with wall
   */
  public detectCollisionWithWall(): void {
    if (this.isBallCollideHorizontalWall()) {
      this._moveX = -this._moveX;
    }

    if (this.isBallCollideCeiling()) {
      this._moveY = -this._moveY;
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
      this._moveY = -this._moveY;
    }
  }

  public detectCollisionWithBrick(): void {}
}
