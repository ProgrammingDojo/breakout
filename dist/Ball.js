import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.moveX = 1;
        this.moveY = -1;
    }
    Ball.prototype.moveBall = function (paddleX, paddleSelfWidth, paddleSelfHeight, speed) {
        this.x += this.moveX * speed;
        this.y += this.moveY * speed;
        this.detectCollision(paddleX, paddleSelfWidth, paddleSelfHeight);
        this.drawBall(this.x, this.y);
    };
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    Ball.prototype.detectCollision = function (paddleX, paddleSelfWidth, paddleSelfHeight) {
        if (this.x > canvas.canvasWidth - Ball.ballRadius ||
            this.x < Ball.ballRadius) {
            this.moveX = -this.moveX;
        }
        if (this.y < Ball.ballRadius) {
            this.moveY = -this.moveY;
        }
        if (this.y > canvas.canvasHeight - Ball.ballRadius - paddleSelfHeight &&
            this.x > paddleX &&
            this.x < paddleX + paddleSelfWidth) {
            this.moveY = -this.moveY;
        }
    };
    Ball.ballRadius = 12;
    return Ball;
}());
export { Ball };
