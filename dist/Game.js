import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
var Game = /** @class */ (function () {
    function Game() {
        this.animationFrameId = null;
        this.isPaused = false;
        this.isRunning = false;
        this.lastTime = 0;
        this.speedMultiplier = 0.1;
        var ballRadius = 12;
        var paddleSelfWidth = 80;
        var paddleSelfHeight = 10;
        var ballStartX = canvas.canvasWidth / 2;
        var ballStartY = canvas.canvasHeight - ballRadius - paddleSelfHeight;
        var paddleStartX = (canvas.canvasWidth - paddleSelfWidth) / 2;
        var paddleStartY = canvas.canvasHeight - paddleSelfHeight;
        this.ball = new Ball(ballStartX, ballStartY, ballRadius);
        this.paddle = new Paddle(paddleStartX, paddleStartY, paddleSelfWidth, paddleSelfHeight);
        this.startGame();
    }
    Game.prototype.startGame = function () {
        var _this = this;
        this.isRunning = true;
        var animate = function (currentTime) {
            if (_this.isPaused || !_this.isRunning) {
                return;
            }
            var deltaTime = currentTime - _this.lastTime;
            _this.lastTime = currentTime;
            if (deltaTime > 0) {
                canvas.ctx.clearRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);
                _this.paddle.movePaddle();
                _this.ball.moveBall(_this.paddle.paddleX, _this.paddle.paddleSelfWidth, _this.paddle.paddleSelfHeight, _this.speedMultiplier * deltaTime);
            }
            _this.animationFrameId = requestAnimationFrame(animate);
        };
        this.lastTime = performance.now();
        this.animationFrameId = requestAnimationFrame(animate);
    };
    Game.prototype.pauseGame = function () {
        this.isPaused = true;
    };
    Game.prototype.resumeGame = function () {
        if (this.isPaused) {
            this.isPaused = false;
            if (this.animationFrameId === null) {
                this.animationFrameId = requestAnimationFrame(this.startGame);
            }
        }
    };
    Game.prototype.endGame = function () {
        this.isRunning = false;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    };
    Game.prototype.setSpeedMultiplier = function (speed) {
        if (speed === void 0) { speed = 1; }
        this.speedMultiplier = speed;
    };
    return Game;
}());
export { Game };
