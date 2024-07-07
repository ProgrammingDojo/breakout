import { canvas } from "./Canvas.js";
export var Paddle = /** @class */ (function () {
    function Paddle(x, y) {
        this.x = x;
        this.y = y;
    }
    Paddle.prototype.drawPaddle = function () {
        canvas.ctx.beginPath();
        canvas.ctx.rect(this.x, this.y, Paddle.paddleSelfWidth, Paddle.paddleSelfHeight);
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.fill();
        canvas.ctx.closePath();
    };
    Paddle.paddleSelfHeight = 10;
    Paddle.paddleSelfWidth = 80;
    return Paddle;
}());
