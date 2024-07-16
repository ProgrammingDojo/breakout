import { canvas } from "./Canvas.js";

interface IPaddle {
  /**
   * @effects move the paddle on canvas based on mouse move
   */
  movePaddle: () => void;
  paddleX: number;
  paddleSelfWidth: number;
  paddleSelfHeight: number;
}

export class Paddle implements IPaddle {
  constructor(
    private _x: number,
    private readonly y: number,
    private readonly _paddleSelfWidth: number,
    private readonly _paddleSelfHeight: number
  ) {
    this.setMouseMoveX();
  }

  public movePaddle(): void {
    canvas.ctx.beginPath();
    canvas.ctx.rect(
      this._x,
      this.y,
      this._paddleSelfWidth,
      this._paddleSelfHeight
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
      let xPosition = e.clientX - canvasOffsetLeft - this._paddleSelfWidth / 2;
      if (xPosition < 0) {
        xPosition = 0;
      }
      if (xPosition > canvas.width - this._paddleSelfWidth) {
        xPosition = canvas.width - this._paddleSelfWidth;
      }
      this._x = xPosition;
    });
  }

  public get paddleX() {
    return this._x;
  }

  public get paddleSelfWidth() {
    return this._paddleSelfWidth;
  }

  public get paddleSelfHeight() {
    return this._paddleSelfHeight;
  }
}
