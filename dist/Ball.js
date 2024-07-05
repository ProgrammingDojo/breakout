import { canvas } from "./Canvas.js";
var Ball = /** @class */ (function () {
    function Ball() {
        this.radius = 12;
        this.x = canvas.canvasWidth / 2;
        this.y = canvas.canvasHeight - this.radius;
        var intervalId = this.moveBall();
    }
    Ball.prototype.drawBall = function (x, y) {
        canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
        canvas.ctx.fillStyle = "blue";
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    };
    /**
     * @effects change this.x, this.y based on time
     * @returns intervalId For clear the interval
     */
    Ball.prototype.moveBall = function () {
        var _this = this;
        var moveX = 2;
        var moveY = -2;
        var intervalId = setInterval(function () {
            _this.x += moveX;
            _this.y += moveY;
            // Collision
            if (_this.x > canvas.canvasWidth - _this.radius || _this.x < _this.radius) {
                moveX = -moveX;
            }
            if (_this.y > canvas.canvasHeight - _this.radius || _this.y < _this.radius) {
                moveY = -moveY;
            }
            _this.drawBall(_this.x, _this.y);
        }, 10);
        return intervalId;
    };
    return Ball;
}());
export { Ball };
