import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball(_x, _y) {
        this._x = _x;
        this._y = _y;
        this.moveX = 1;
        this.moveY = -1;
    }
    Object.defineProperty(Ball.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Ball.prototype.moveBall = function (speed) {
        this._x += this.moveX * speed;
        this._y += this.moveY * speed;
    };
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    Ball.prototype.reverseXIncrement = function () {
        this.moveX = -this.moveX;
    };
    Ball.prototype.reverseYIncrement = function () {
        this.moveY = -this.moveY;
    };
    Ball.prototype.detectCollisionWithWall = function () {
        if (this._x > canvas.width - Ball.ballRadius ||
            this._x < Ball.ballRadius) {
            this.reverseXIncrement();
        }
        if (this._y < Ball.ballRadius) {
            this.reverseYIncrement();
        }
    };
    Ball.prototype.detectCollisionWithPaddle = function (paddleX, paddleSelfWidth, paddleSelfHeight) {
        if (this._y > canvas.height - Ball.ballRadius - paddleSelfHeight &&
            this._x > paddleX &&
            this._x < paddleX + paddleSelfWidth) {
            this.reverseYIncrement();
        }
    };
    Ball.prototype.detectCollisionWithBrick = function () {
    };
    Ball.ballRadius = 12;
    return Ball;
}());
export { Ball };
