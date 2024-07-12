import { canvas } from "./Canvas.js";
var Paddle = /** @class */ (function () {
    function Paddle(x, y, paddleSelfWidth, paddleSelfHeight) {
        this.x = x;
        this.y = y;
        this.paddleSelfWidth = paddleSelfWidth;
        this.paddleSelfHeight = paddleSelfHeight;
        this.setMouseMoveX();
    }
    Paddle.prototype.movePaddle = function () {
        canvas.ctx.beginPath();
        canvas.ctx.rect(this.x, this.y, this.paddleSelfWidth, this.paddleSelfHeight);
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
            var xPosition = e.clientX - canvasOffsetLeft;
            if (xPosition < 0) {
                xPosition = 0;
            }
            if (xPosition > canvas.canvasWidth - _this.paddleSelfWidth) {
                xPosition = canvas.canvasWidth - _this.paddleSelfWidth;
            }
            _this.x = xPosition;
        });
    };
    return Paddle;
}());
export { Paddle };
