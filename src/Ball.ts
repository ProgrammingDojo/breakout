import { canvas } from "./Canvas.js";

export class Ball {
  public static readonly radius: number = 12;
  private moveX = 2;
  private moveY = -2;
  constructor(public x: number, public y: number) {}

  private drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, Ball.radius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  /**
   * @effects change this.x, this.y based on time
   * @returns intervalId For clear the interval
   */
  public moveBall(): void {
    this.x += this.moveX;
    this.y += this.moveY;
    // Collision
    if (this.x > canvas.canvasWidth - Ball.radius || this.x < Ball.radius) {
      this.moveX = -this.moveX;
    }
    if (this.y > canvas.canvasHeight - Ball.radius || this.y < Ball.radius) {
      this.moveY = -this.moveY;
    }
    this.drawBall(this.x, this.y);
  }
}
