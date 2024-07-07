import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
export class Game {
  constructor() {
    const ballStartX = canvas.canvasWidth / 2;
    const ballStartY = canvas.canvasHeight - Ball.radius;
    const paddleStartX = (canvas.canvasWidth - Paddle.paddleSelfWidth) / 2;
    const paddleStartY = canvas.canvasHeight - Paddle.paddleSelfHeight / 2;

    const ball = new Ball(ballStartX, ballStartY);
    const paddle = new Paddle(paddleStartX, paddleStartY);
    this.draw(ball, paddle);
  }

  private draw(ball: Ball, paddle: Paddle): void {
    setInterval(() => {
      canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
      ball.moveBall();
      paddle.drawPaddle();
    }, 10);
  }
}
