import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball() {
        this.radius = 12;
        var ballInitialLocationY = canvas.canvasHeight - this.radius;
        var ballInitialLocationX = canvas.canvasWidth / 2;
        this.drawBall(ballInitialLocationX, ballInitialLocationY);
    }
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    return Ball;
}());
export { Ball };
