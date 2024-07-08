import { canvas } from "./Canvas.js";

interface IPaddle {
  /**
   * @effects draw the paddle on canvas
   */
  drawPaddle(): void;
}

export class Paddle implements IPaddle {
  constructor(
    private x: number,
    private y: number,
    private paddleSelfWidth: number,
    private paddleSelfHeight: number
  ) {}

  public drawPaddle(): void {
    canvas.ctx.beginPath();
    canvas.ctx.rect(
      this.x,
      this.y,
      this.paddleSelfWidth,
      this.paddleSelfHeight
    );
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.fill();
    canvas.ctx.closePath();
  }
}
