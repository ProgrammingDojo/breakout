import { canvas } from "./Canvas.js";
var Paddle = /** @class */ (function () {
    function Paddle(_x, y, _width, _height) {
        this._x = _x;
        this.y = y;
        this._width = _width;
        this._height = _height;
        this.setMouseMoveX();
    }
    Paddle.prototype.movePaddle = function () {
        canvas.ctx.beginPath();
        canvas.ctx.rect(this._x, this.y, this._width, this._height);
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.fill();
        canvas.ctx.closePath();
    };
    /**
     * @effects change the this.x based on mouse move
     */
    Paddle.prototype.setMouseMoveX = function () {
        var _this = this;
        document.addEventListener("mousemove", function (e) {
            var canvasOffsetLeft = canvas.canvasElement.getBoundingClientRect().left;
            var xPosition = e.clientX - canvasOffsetLeft - _this._width / 2;
            if (xPosition < 0) {
                xPosition = 0;
            }
            if (xPosition > canvas.width - _this._width) {
                xPosition = canvas.width - _this._width;
            }
            _this._x = xPosition;
        });
    };
    Object.defineProperty(Paddle.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Paddle;
}());
export { Paddle };
