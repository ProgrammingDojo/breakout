import { canvas } from "./Canvas.js";
import { Ball } from "./Ball.js";
var Brick = /** @class */ (function () {
    function Brick(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._width = 50;
        this._height = 20;
    }
    Object.defineProperty(Brick.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Brick.prototype.drawBrick = function () {
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.strokeStyle = "white";
        canvas.ctx.lineWidth = 2;
        canvas.ctx.fillRect(this._x, this._y, this._width, this._height);
        canvas.ctx.strokeRect(this._x, this._y, this._width, this._height);
    };
    Brick.prototype.isCollide = function (ballX, ballY) {
        // check ball's upper side collide with the brick's downside
        if (
        // check y location satisfied the criteria
        Math.floor(ballY - Ball.ballRadius) === Math.floor(this._y + this._height)) {
            // check x location satisfied the criteria
            if (ballX > this._x && ballX < this._x + this._width) {
                return true;
            }
        }
        return false;
    };
    return Brick;
}());
export { Brick };
