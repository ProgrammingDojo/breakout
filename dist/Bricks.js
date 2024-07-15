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
    Object.defineProperty(BrickMatrix.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: false,
        configurable: true
    });
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
                this._matrix[i][j].drawBrick();
            }
        }
    };
    BrickMatrix.prototype.detectCollideBrick = function (ballX, ballY) {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                if (this._matrix[i][j].isCollide(ballX, ballY)) {
                    // how to delete this? I need to keep the empty there and stop the collision
                    this._matrix[i].splice(j, 1);
                }
            }
        }
    };
    return BrickMatrix;
}());
export { BrickMatrix };
