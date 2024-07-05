import { canvas } from "./Canvas.js";

export class Ball {
  private readonly radius: number = 12;
  private x: number;
  private y: number;
  constructor() {
    this.x = canvas.canvasWidth / 2;
    this.y = canvas.canvasHeight - this.radius;
    const intervalId = this.moveBall();
  }

  private drawBall(x: number, y: number): void {
    canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  /**
   * @effects change this.x, this.y based on time
   * @returns intervalId For clear the interval
   */
  private moveBall(): NodeJS.Timeout {
    let moveX = 2;
    let moveY = -2;
    const intervalId = setInterval(() => {
      this.x += moveX;
      this.y += moveY;
      // Collision
      if (this.x > canvas.canvasWidth - this.radius || this.x < this.radius) {
        moveX = -moveX;
      }
      if (this.y > canvas.canvasHeight - this.radius || this.y < this.radius) {
        moveY = -moveY;
      }

      this.drawBall(this.x, this.y);
    }, 10);
    return intervalId;
  }
}
