class Canvas {
  public ctx: CanvasRenderingContext2D;
  public canvasElement: HTMLCanvasElement | null;
  constructor(
    public canvasWidth: number = 500,
    public canvasHeight: number = 500
  ) {
    this.canvasElement =
      (document.getElementById("canvas") as HTMLCanvasElement) || null;
    this.canvasElement.width = canvasWidth;
    this.canvasElement.height = canvasHeight;
    this.ctx = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;
  }
}

export const canvas = new Canvas();
