import { canvas } from "./Canvas.js";
import { Ball } from "./Ball.js";
interface IBrick {
  width: number;
  height: number;
  drawBrick: () => void;
  /**
   * @param ballX ball's origin x location
   * @param ballY ball's origin y location
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
    console.log(ballY - Ball.ballRadius, this._y + this._height);
    // check ball's upper side collide with the brick's downside
    if (
      ballY - Ball.ballRadius === this._y + this._height &&
      ballX > this._x &&
      ballX < this._x + this._width
    ) {
      return true;
    }
    return false;
  }
}
