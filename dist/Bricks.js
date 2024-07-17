import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";
var brickExample = new Brick(0, 0);
var BrickMatrix = /** @class */ (function () {
    function BrickMatrix() {
        this.col = canvas.width / brickExample.width;
        this.row = 3;
        this._matrix = [];
        this._matrix = this.initMatrix();
    }
    BrickMatrix.prototype.initMatrix = function () {
        var _this = this;
        return Array.from({ length: this.row }, function (_, i) {
            return Array.from({ length: _this.col }, function (_, j) { return new Brick(j * brickExample.width, i * brickExample.height); });
        });
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
    BrickMatrix.prototype.removeCollideBrick = function (ballX, ballY) {
        var newMatrix = new BrickMatrix();
        newMatrix._matrix = this._matrix.map(function (row) {
            return row.map(function (brick) {
                return brick && brick.isCollide(ballX, ballY) ? undefined : brick;
            });
        });
        return newMatrix;
    };
    return BrickMatrix;
}());
export { BrickMatrix };
