class Canvas {
  public ctx: CanvasRenderingContext2D;

  constructor(
    public canvasWidth: number = 500,
    public canvasHeight: number = 500
  ) {
    const canvasElement =
      (document.getElementById("canvas") as HTMLCanvasElement) || null;
    canvasElement.width = canvasWidth;
    canvasElement.height = canvasHeight;
    this.ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
  }
}

export const canvas = new Canvas();
