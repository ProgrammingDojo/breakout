import { canvas } from "./Canvas.js";

interface IPaddle {
  /**
   * @effects move the paddle on canvas based on mouse move
   */
  movePaddle(): void;
}

export class Paddle implements IPaddle {
  constructor(
    private x: number,
    private readonly y: number,
    private paddleSelfWidth: number,
    private paddleSelfHeight: number
  ) {
    this.setMouseMoveX();
  }

  public movePaddle(): void {
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

  /**
   * @effects change the this.x based on mouse move
   */
  private setMouseMoveX(): void {
    document.addEventListener("mousemove", (e) => {
      const canvasOffsetLeft =
        canvas.canvasElement!.getBoundingClientRect().left;
      let xPosition = e.clientX - canvasOffsetLeft;
      if (xPosition < 0) {
        xPosition = 0;
      }
      if (xPosition > canvas.canvasWidth - this.paddleSelfWidth) {
        xPosition = canvas.canvasWidth - this.paddleSelfWidth;
      }
      this.x = xPosition;
    });
  }
}
