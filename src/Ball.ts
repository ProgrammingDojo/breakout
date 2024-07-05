import { canvas } from "./Canvas.js";

export class Ball {
  private readonly radius: number = 12;
  constructor() {
    const ballInitialLocationY = canvas.canvasHeight - this.radius;
    const ballInitialLocationX = canvas.canvasWidth / 2;
    this.drawBall(ballInitialLocationX, ballInitialLocationY);
  }

  private drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }
}
