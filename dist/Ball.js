import { canvas } from "./Canvas.js";
export var Ball = /** @class */ (function () {
    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.moveX = 2;
        this.moveY = -2;
    }
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, Ball.radius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    /**
     * @effects change this.x, this.y based on time
     * @returns intervalId For clear the interval
     */
    Ball.prototype.moveBall = function () {
        this.x += this.moveX;
        this.y += this.moveY;
        // Collision
        if (this.x > canvas.canvasWidth - Ball.radius || this.x < Ball.radius) {
            this.moveX = -this.moveX;
        }
        if (this.y > canvas.canvasHeight - Ball.radius || this.y < Ball.radius) {
            this.moveY = -this.moveY;
        }
        this.drawBall(this.x, this.y);
    };
    Ball.radius = 12;
    return Ball;
}());
