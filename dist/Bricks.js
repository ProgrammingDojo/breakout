import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";
var brickExample = new Brick(0, 0);
var BrickMatrix = /** @class */ (function () {
    function BrickMatrix() {
        this.col = canvas.canvasWidth / brickExample.width;
        this.row = 3;
    }
    BrickMatrix.prototype.initMatrix = function () {
    };
    return BrickMatrix;
}());
