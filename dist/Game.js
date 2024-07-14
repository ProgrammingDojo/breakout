import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
var Game = /** @class */ (function () {
    function Game() {
        var ballRadius = 12;
        var paddleSelfWidth = 80;
        var paddleSelfHeight = 10;
        var ballStartX = canvas.canvasWidth / 2;
        var ballStartY = canvas.canvasHeight - ballRadius - paddleSelfHeight;
        var paddleStartX = (canvas.canvasWidth - paddleSelfWidth) / 2;
        var paddleStartY = canvas.canvasHeight - paddleSelfHeight;
        var ball = new Ball(ballStartX, ballStartY, ballRadius);
        var paddle = new Paddle(paddleStartX, paddleStartY, paddleSelfWidth, paddleSelfHeight);
        this.intervalId = this.startGame(ball, paddle);
    }
    Game.prototype.startGame = function (ball, paddle) {
        var intervalId = setInterval(function () {
            canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
            paddle.movePaddle();
            ball.moveBall(paddle.paddleX, paddle.paddleSelfWidth, paddle.paddleSelfHeight);
        }, 10);
        return intervalId;
    };
    return Game;
}());
export { Game };
