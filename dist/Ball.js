import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.moveX = 2;
        this.moveY = -2;
    }
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    Ball.prototype.moveBall = function () {
        this.x += this.moveX;
        this.y += this.moveY;
        // Collision
        if (this.x > canvas.canvasWidth - this.radius || this.x < this.radius) {
            this.moveX = -this.moveX;
        }
        if (this.y > canvas.canvasHeight - this.radius || this.y < this.radius) {
            this.moveY = -this.moveY;
        }
        this.drawBall(this.x, this.y);
    };
    return Ball;
}());
export { Ball };
