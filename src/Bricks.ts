import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";

const brickExample = new Brick(0, 0);
interface IBrickMatrix {
  /**
   *  create a matrix for bricks
   *
   */
  initMatrix: () => void;
}


class BrickMatrix implements IBrickMatrix {
  private col = canvas.canvasWidth / brickExample.width;
  private readonly row = 3;
  constructor() {}

  public initMatrix(){

  }
}
