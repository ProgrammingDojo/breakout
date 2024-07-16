interface ICanvas {
  ctx: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement;
  width: number;
  height: number;
}
class Canvas implements ICanvas {
  private _ctx: CanvasRenderingContext2D;
  private _canvasElement: HTMLCanvasElement;
  private _width: number = 500;
  private _height: number = 500;

  constructor() {
    this._canvasElement =
      (document.getElementById("canvas") as HTMLCanvasElement);
    this._canvasElement.width = this._width;
    this._canvasElement.height = this._height;
    this._ctx = this._canvasElement.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
  }

  public get ctx() {
    return this._ctx;
  }

  public get canvasElement() {
    return this._canvasElement;
  }

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }
}

export const canvas = new Canvas();
