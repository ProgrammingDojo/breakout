import { canvas } from "./Canvas.js";
//TODO: check all the methods, divide method to two kinds, side effect or return a value, centralizing where the side effects occur
interface IBall {
  moveBall(speed: number): void;
}

export class Ball implements IBall {
  private _moveX = 1;
  private _moveY = -1;
  public static ballRadius = 12;
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set moveX(newMoveX: number) {
    this._moveX = newMoveX;
  }

  set moveY(newMoveY: number) {
    this._moveY = newMoveY;
  }

  public moveBall(speed: number): Ball {
    const newX = this._x + this._moveX * speed;
    const newY = this._x + this._moveY * speed;
    return new Ball(newX, newY);
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

  public detectCollisionWithWall(ball: Ball): Ball {
    if (this.isBallCollideHorizontalWall()) {
      const newBall = new Ball(this._x, this._y);
      newBall.moveX = -this._moveX;
      return newBall;
    }

    if (this.isBallCollideCeiling()) {
      const newBall = new Ball(this._x, this._y);
      newBall.moveY = -this._moveY;
      return newBall;
    }

    return ball;
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

    }
  }

  public detectCollisionWithBrick(): void {}
}
