import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";
var brickExample = new Brick(0, 0);
var BrickMatrix = /** @class */ (function () {
    function BrickMatrix() {
        this.col = canvas.canvasWidth / brickExample.width;
        this.row = 3;
        this._matrix = [];
        this.initMatrix();
    }
    BrickMatrix.prototype.initMatrix = function () {
        for (var i = 0; i < this.row; i++) {
            var row = [];
            for (var j = 0; j < this.col; j++) {
                row.push(new Brick(j * brickExample.width, i * brickExample.height));
            }
            this._matrix.push(row);
        }
    };
    BrickMatrix.prototype.drawMatrix = function () {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                var brick = this._matrix[i][j];
                if (!!brick) {
                    brick.drawBrick();
                }
            }
        }
    };
    BrickMatrix.prototype.collideBrick = function (ballX, ballY) {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                if (this._matrix[i][j] && this._matrix[i][j].isCollide(ballX, ballY)) {
                    console.log("hit");
                    this._matrix[i][j] = null;
                }
            }
        }
    };
    return BrickMatrix;
}());
export { BrickMatrix };
