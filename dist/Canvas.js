var Canvas = /** @class */ (function () {
    function Canvas(canvasWidth, canvasHeight) {
        if (canvasWidth === void 0) { canvasWidth = 500; }
        if (canvasHeight === void 0) { canvasHeight = 500; }
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        var canvasElement = document.getElementById("canvas") || null;
        canvasElement.width = canvasWidth;
        canvasElement.height = canvasHeight;
        this.ctx = canvasElement.getContext("2d");
    }
    return Canvas;
}());
export var canvas = new Canvas();
