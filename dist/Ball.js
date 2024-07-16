import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._moveX = 1;
        this._moveY = -1;
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
    Object.defineProperty(Ball.prototype, "moveX", {
        set: function (newMoveX) {
            this._moveX = newMoveX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "moveY", {
        set: function (newMoveY) {
            this._moveY = newMoveY;
        },
        enumerable: false,
        configurable: true
    });
    Ball.prototype.moveBall = function (speed) {
        var newX = this._x + this._moveX * speed;
        var newY = this._x + this._moveY * speed;
        return new Ball(newX, newY);
    };
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, Ball.ballRadius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    Ball.prototype.isBallCollideHorizontalWall = function () {
        if (this._x > canvas.width - Ball.ballRadius || this._x < Ball.ballRadius) {
            return true;
        }
        return false;
    };
    Ball.prototype.isBallCollideCeiling = function () {
        if (this._y < Ball.ballRadius) {
            return true;
        }
        return false;
    };
    Ball.prototype.detectCollisionWithWall = function (ball) {
        if (this.isBallCollideHorizontalWall()) {
            var newBall = new Ball(this._x, this._y);
            newBall.moveX = -this._moveX;
            return newBall;
        }
        if (this.isBallCollideCeiling()) {
            var newBall = new Ball(this._x, this._y);
            newBall.moveY = -this._moveY;
            return newBall;
        }
        return ball;
    };
    Ball.prototype.detectCollisionWithPaddle = function (x, width, height) {
        if (this._y > canvas.height - Ball.ballRadius - height &&
            this._x > x &&
            this._x < x + width) {
        }
    };
    Ball.prototype.detectCollisionWithBrick = function () { };
    Ball.ballRadius = 12;
    return Ball;
}());
export { Ball };
