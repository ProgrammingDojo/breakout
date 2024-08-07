import { canvas } from "./Canvas.js";
interface IBrick {
  width: number;
  height: number;
  /**
   *
   * @effects draw a brick
   */
  drawBrick: () => void;
  /**
   * @param ballX ball's origin x location
   * @param ballY ball's origin y location
   * @return {boolean} whether the brick is collide with the ball
   */
  isCollide: (ballX: number, ballY: number) => boolean;
}

export class Brick implements IBrick {
  private readonly _width = 50;
  private readonly _height = 20;

  constructor(private _x: number, private _y: number) {}

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  public drawBrick(): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.strokeStyle = "white";
    canvas.ctx.lineWidth = 2;
    canvas.ctx.fillRect(this._x, this._y, this._width, this._height);
    canvas.ctx.strokeRect(this._x, this._y, this._width, this._height);
  }

  public isCollide(ballX: number, ballY: number): boolean {
    // check ball's upper side collide with the brick's downside
    // this is where the problem is
    if (
      ballY > this._y &&
      ballY < this._y + this._height &&
      ballX > this._x &&
      ballX < this._x + this._width
    ) {
      return true;
    }
    return false;
  }
}
