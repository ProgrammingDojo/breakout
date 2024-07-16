import { canvas } from "./Canvas.js";
var Paddle = /** @class */ (function () {
    function Paddle(_x, y, _paddleSelfWidth, _paddleSelfHeight) {
        this._x = _x;
        this.y = y;
        this._paddleSelfWidth = _paddleSelfWidth;
        this._paddleSelfHeight = _paddleSelfHeight;
        this.setMouseMoveX();
    }
    Paddle.prototype.movePaddle = function () {
        canvas.ctx.beginPath();
        canvas.ctx.rect(this._x, this.y, this._paddleSelfWidth, this._paddleSelfHeight);
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
            var xPosition = e.clientX - canvasOffsetLeft - _this._paddleSelfWidth / 2;
            if (xPosition < 0) {
                xPosition = 0;
            }
            if (xPosition > canvas.width - _this._paddleSelfWidth) {
                xPosition = canvas.width - _this._paddleSelfWidth;
            }
            _this._x = xPosition;
        });
    };
    Object.defineProperty(Paddle.prototype, "paddleX", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "paddleSelfWidth", {
        get: function () {
            return this._paddleSelfWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "paddleSelfHeight", {
        get: function () {
            return this._paddleSelfHeight;
        },
        enumerable: false,
        configurable: true
    });
    return Paddle;
}());
export { Paddle };
