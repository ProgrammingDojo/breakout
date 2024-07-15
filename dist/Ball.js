import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball(_x, _y) {
        this._x = _x;
        this._y = _y;
        this.moveX = 1;
        this.moveY = -1;
    }
    Object.defineProperty(Ball.prototype, "ballX", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "ballY", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Ball.prototype.moveBall = function (paddleX, paddleSelfWidth, paddleSelfHeight, speed) {
        this._x += this.moveX * speed;
        this._y += this.moveY * speed;
        this.detectCollision(paddleX, paddleSelfWidth, paddleSelfHeight);
        this.drawBall(this._x, this._y);
    };
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    Ball.prototype.detectCollision = function (paddleX, paddleSelfWidth, paddleSelfHeight) {
        if (this._x > canvas.canvasWidth - Ball.ballRadius ||
            this._x < Ball.ballRadius) {
            this.moveX = -this.moveX;
        }
        if (this._y < Ball.ballRadius) {
            this.moveY = -this.moveY;
        }
        if (this._y > canvas.canvasHeight - Ball.ballRadius - paddleSelfHeight &&
            this._x > paddleX &&
            this._x < paddleX + paddleSelfWidth) {
            this.moveY = -this.moveY;
        }
    };
    Ball.ballRadius = 12;
    return Ball;
}());
export { Ball };
