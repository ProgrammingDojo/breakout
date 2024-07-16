import { canvas } from "./Canvas.js";

interface IPaddle {
  /**
   * @effects move the paddle on canvas based on mouse move
   */
  movePaddle: () => void;
  x: number;
  width: number;
  height: number;
}

export class Paddle implements IPaddle {
  constructor(
    private _x: number,
    private readonly y: number,
    private readonly _width: number,
    private readonly _height: number
  ) {
    this.setMouseMoveX();
  }

  public movePaddle(): void {
    canvas.ctx.beginPath();
    canvas.ctx.rect(
      this._x,
      this.y,
      this._width,
      this._height
    );
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.fill();
    canvas.ctx.closePath();
  }

  /**
   * @effects change the this.x based on mouse move
   */
  private setMouseMoveX(): void {
    document.addEventListener("mousemove", (e) => {
      const canvasOffsetLeft =
        canvas.canvasElement!.getBoundingClientRect().left;
      let xPosition = e.clientX - canvasOffsetLeft - this._width / 2;
      if (xPosition < 0) {
        xPosition = 0;
      }
      if (xPosition > canvas.width - this._width) {
        xPosition = canvas.width - this._width;
      }
      this._x = xPosition;
    });
  }

  public get x() {
    return this._x;
  }

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }
}
