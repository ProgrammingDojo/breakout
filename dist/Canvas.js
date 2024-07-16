var Canvas = /** @class */ (function () {
    function Canvas() {
        this._width = 500;
        this._height = 500;
        this._canvasElement =
            document.getElementById("canvas");
        this._canvasElement.width = this._width;
        this._canvasElement.height = this._height;
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
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}());
export var canvas = new Canvas();
