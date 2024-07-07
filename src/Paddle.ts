import { canvas } from "./Canvas.js";
export class Paddle {
  public static paddleSelfHeight: number = 10;
  public static paddleSelfWidth: number = 80;
  constructor(public x: number, public y: number) {}

  public drawPaddle(): void {
    canvas.ctx.beginPath();
    canvas.ctx.rect(
      this.x,
      this.y,
      Paddle.paddleSelfWidth,
      Paddle.paddleSelfHeight
    );
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.fill();
    canvas.ctx.closePath();
  }
}
