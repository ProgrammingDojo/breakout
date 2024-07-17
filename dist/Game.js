import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { canvas } from "./Canvas.js";
import { BrickMatrix } from "./Bricks.js";
var Game = /** @class */ (function () {
    function Game() {
        this.animationFrameId = null;
        this.isPaused = false;
        this.isRunning = false;
        this.lastTime = 0;
        this.speedMultiplier = 0.4;
        var paddleWidth = 80;
        var paddleHeight = 10;
        var ballStartX = canvas.width / 2;
        var ballStartY = canvas.height - Ball.ballRadius - paddleHeight;
        var paddleStartX = (canvas.width - paddleWidth) / 2;
        var paddleStartY = canvas.height - paddleHeight;
        this.brickMatrix = new BrickMatrix();
        this.ball = new Ball(ballStartX, ballStartY);
        this.paddle = new Paddle(paddleStartX, paddleStartY, paddleWidth, paddleHeight);
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
                canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
                _this.paddle.movePaddle();
                _this.ball.moveBall(_this.speedMultiplier * deltaTime);
                _this.ball.detectCollisionWithWall();
                _this.ball.detectCollisionWithPaddle(_this.paddle.x, _this.paddle.width, _this.paddle.height);
                _this.ball.drawBall(_this.ball.x, _this.ball.y);
                _this.brickMatrix.removeCollideBrick(_this.ball.x, _this.ball.y);
                _this.brickMatrix.drawMatrix();
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
    Game.prototype.showGameOver = function () {
        canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.ctx.font = "bold 48px serif";
        canvas.ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    };
    Game.prototype.setSpeedMultiplier = function (speed) {
        if (speed === void 0) { speed = 1; }
        this.speedMultiplier = speed;
    };
    return Game;
}());
export { Game };
