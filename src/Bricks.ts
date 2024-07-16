import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";

const brickExample = new Brick(0, 0);
interface IBrickMatrix {
  /**
   *  create a matrix for bricks
   */
  drawMatrix: () => void;

  /**
   * @param ballX the current rolling ball's x position
   * @param ballY the current rolling ball's y position
   */
  collideBrick: (ballX: number, ballY: number) => void;
}

export class BrickMatrix implements IBrickMatrix {
  private readonly col = canvas.canvasWidth / brickExample.width;
  private readonly row = 3;
  private _matrix: Array<Array<Brick | null>> = [];
  constructor() {
    this.initMatrix();
  }

  private initMatrix(): void {
    for (let i = 0; i < this.row; i++) {
      const row = [];
      for (let j = 0; j < this.col; j++) {
        row.push(new Brick(j * brickExample.width, i * brickExample.height));
      }
      this._matrix.push(row);
    }
  }

  public drawMatrix(): void {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const brick = this._matrix[i][j];
        if (!!brick) {
          brick.drawBrick();
        }
      }
    }
  }

  public collideBrick(ballX: number, ballY: number): void {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (this._matrix[i][j] && this._matrix[i][j]!.isCollide(ballX, ballY)) {
          console.log("hit");
          this._matrix[i][j] = null;
        }
      }
    }
  }
}
