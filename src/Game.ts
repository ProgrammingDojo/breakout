import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
export class Game {
  private intervalId: NodeJS.Timeout;

  constructor() {
    const ballRadius = 12;
    const paddleSelfWidth = 80;
    const paddleSelfHeight = 10;
    const ballStartX = canvas.canvasWidth / 2;
    const ballStartY = canvas.canvasHeight - ballRadius;
    const paddleStartX = (canvas.canvasWidth - paddleSelfWidth) / 2;
    const paddleStartY = canvas.canvasHeight - paddleSelfHeight / 2;

    const ball = new Ball(ballStartX, ballStartY, ballRadius);
    const paddle = new Paddle(
      paddleStartX,
      paddleStartY,
      paddleSelfWidth,
      paddleSelfHeight
    );
    this.intervalId = this.startGame(ball, paddle);
  }

  private startGame(ball: Ball, paddle: Paddle): NodeJS.Timeout {
    const intervalId = setInterval(() => {
      canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
      ball.moveBall();
      paddle.movePaddle();
    }, 10);
    return intervalId;
  }
}
