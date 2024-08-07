import { canvas } from "./Canvas.js";
export var Ball = /** @class */ (function () {
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
    Ball.prototype.moveBall = function (speed) {
        this._x += this._moveX * speed;
        this._y += this._moveY * speed;
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
    Ball.prototype.isBallCollidePaddle = function (paddleX, paddleWidth, paddleHeight) {
        if (this._y < canvas.height - paddleHeight &&
            this._y > canvas.height - Ball.ballRadius - paddleHeight &&
            this._x > paddleX &&
            this._x < paddleX + paddleWidth) {
            return true;
        }
        return false;
    };
    Ball.prototype.isBallCollideFloor = function (paddleX, paddleWidth, paddleHeight) {
        if (this._y > canvas.height - Ball.ballRadius - paddleHeight &&
            (this._x <= paddleX || this._x >= paddleX + paddleWidth)) {
            return true;
        }
        return false;
    };
    /**
     *
     * @param ball the current ball
     * @returns a new ball after examined whether collide with wall
     */
    Ball.prototype.detectCollisionWithWall = function () {
        if (this.isBallCollideHorizontalWall()) {
            this._moveX = -this._moveX;
        }
        if (this.isBallCollideCeiling()) {
            this._moveY = -this._moveY;
        }
    };
    Ball.prototype.detectCollisionWithPaddle = function (paddleX, paddleWidth, paddleHeight) {
        if (this.isBallCollidePaddle(paddleX, paddleWidth, paddleHeight)) {
            this._moveY = -this._moveY;
        }
    };
    Ball.prototype.detectCollisionWithBrickMatrix = function (brickMatrix) {
        var _this = this;
        brickMatrix.matrix.forEach(function (row) {
            row.forEach(function (brick) {
                if (!!brick && brick.isCollide(_this._x, _this._y)) {
                    _this._moveY = -_this._moveY;
                }
            });
        });
    };
    Ball.ballRadius = 12;
    return Ball;
}());
