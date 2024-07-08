import { canvas } from "./Canvas.js";
var Paddle = /** @class */ (function () {
    function Paddle(x, y, paddleSelfWidth, paddleSelfHeight) {
        this.x = x;
        this.y = y;
        this.paddleSelfWidth = paddleSelfWidth;
        this.paddleSelfHeight = paddleSelfHeight;
    }
    Paddle.prototype.drawPaddle = function () {
        canvas.ctx.beginPath();
        canvas.ctx.rect(this.x, this.y, this.paddleSelfWidth, this.paddleSelfHeight);
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.fill();
        canvas.ctx.closePath();
    };
    return Paddle;
}());
export { Paddle };
