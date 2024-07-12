var Canvas = /** @class */ (function () {
    function Canvas() {
        this._canvasWidth = 500;
        this._canvasHeight = 500;
        this._canvasElement =
            document.getElementById("canvas") || null;
        this._canvasElement.width = this._canvasWidth;
        this._canvasElement.height = this._canvasHeight;
        this._ctx = this._canvasElement.getContext("2d");
    }
    Object.defineProperty(Canvas.prototype, "ctx", {
        get: function () {
            return this._ctx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "canvasElement", {
        get: function () {
            return this._canvasElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "canvasWidth", {
        get: function () {
            return this._canvasWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "canvasHeight", {
        get: function () {
            return this._canvasHeight;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}());
export var canvas = new Canvas();
