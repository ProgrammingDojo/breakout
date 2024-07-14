import { canvas } from "./Canvas.js";

interface IBall {
  /**
   * @effects change this.x, this.y every frame to move the ball
   * @param {number} paddleX - get the paddle's current x position to detect collision
   * @param {number} paddleSelfWidth - get the paddle's width to detect collision
   * @param {number} paddleSelfHeight - get the paddle's height to detect collision
   */
  moveBall(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number
  ): void;
}

export class Ball implements IBall {
  private moveX = 2;
  private moveY = -2;
  constructor(private x: number, private y: number, private radius: number) {}

  private drawBall(x: number, y: number): void {
    canvas.ctx.fillStyle = "blue";
    canvas.ctx.beginPath();
    canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    canvas.ctx.closePath();
    canvas.ctx.fill();
  }

  private detectCollision(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number
  ): void {
    if (this.x > canvas.canvasWidth - this.radius || this.x < this.radius) {
      this.moveX = -this.moveX;
    }

    if (this.y < this.radius) {
      this.moveY = -this.moveY;
    }
    if (
      this.y > canvas.canvasHeight - this.radius - paddleSelfHeight &&
      this.x > paddleX &&
      this.x < paddleX + paddleSelfWidth
    ) {
      this.moveY = -this.moveY;
    }
  }

  public moveBall(
    paddleX: number,
    paddleSelfWidth: number,
    paddleSelfHeight: number
  ): void {
    this.x += this.moveX;
    this.y += this.moveY;
    this.detectCollision(paddleX, paddleSelfWidth, paddleSelfHeight);
    this.drawBall(this.x, this.y);
  }
}
