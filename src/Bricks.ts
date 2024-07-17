import { Brick } from "./Brick.js";
import { canvas } from "./Canvas.js";

const brickExample = new Brick(0, 0);
interface IBrickMatrix {
  /**
   * @effects draw a matrix for bricks
   */
  drawMatrix: () => void;

  /**
   * @param ballX the current rolling ball's x position
   * @param ballY the current rolling ball's y position
   * @return {BrickMatrix} return a new brick matrix
   */
  removeCollideBrick: (ballX: number, ballY: number) => void;
}

export class BrickMatrix implements IBrickMatrix {
  private readonly col = canvas.width / brickExample.width;
  private readonly row = 3;
  private _matrix: Array<Array<Brick | undefined>> = [];
  constructor() {
    this._matrix = this.initMatrix();
  }

  private initMatrix(): Array<Array<Brick | undefined>> {
    return Array.from({ length: this.row }, (_, i) =>
      Array.from(
        { length: this.col },
        (_, j) => new Brick(j * brickExample.width, i * brickExample.height)
      )
    );
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

  public removeCollideBrick(ballX: number, ballY: number): void {
    this._matrix.forEach((row) =>
      row.forEach((brick) => {
        if (!!brick && brick.isCollide(ballX, ballY)) {
          console.log("hit");
          brick = undefined;
        }
      })
    );
  }
}
