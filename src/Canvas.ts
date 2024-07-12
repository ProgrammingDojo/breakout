interface ICanvas {
  ctx: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement | null;
  canvasWidth: number;
  canvasHeight: number;
}

class Canvas implements ICanvas {
  private _ctx: CanvasRenderingContext2D;
  private _canvasElement: HTMLCanvasElement | null;
  private _canvasWidth: number = 500;
  private _canvasHeight: number = 500;

  constructor() {
    this._canvasElement =
      (document.getElementById("canvas") as HTMLCanvasElement) || null;
    this._canvasElement.width = this._canvasWidth;
    this._canvasElement.height = this._canvasHeight;
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

  public get canvasWidth() {
    return this._canvasWidth;
  }

  public get canvasHeight() {
    return this._canvasHeight;
  }
}

export const canvas = new Canvas();
