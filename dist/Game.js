import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
var Game = /** @class */ (function () {
    function Game() {
        var ballStartX = canvas.canvasWidth / 2;
        var ballStartY = canvas.canvasHeight - Ball.radius;
        var paddleStartX = (canvas.canvasWidth - Paddle.paddleSelfWidth) / 2;
        var paddleStartY = canvas.canvasHeight - Paddle.paddleSelfHeight / 2;
        var ball = new Ball(ballStartX, ballStartY);
        var paddle = new Paddle(paddleStartX, paddleStartY);
        this.draw(ball, paddle);
    }
    Game.prototype.draw = function (ball, paddle) {
        setInterval(function () {
            canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
            ball.moveBall();
            paddle.drawPaddle();
        }, 10);
    };
    return Game;
}());
export { Game };
