import { Game } from "./Game.js";

class Main {
  private game: Game;

  constructor() {
    this.game = new Game();
    this.reset();
    this.pause();
    this.life();
  }

  private reset() {
    const reset = document.getElementById("reset") as HTMLButtonElement;
    reset.addEventListener("click", () => {
      this.game.startGame();
    });
  }

  private pause() {
    const pause = document.getElementById("pause") as HTMLButtonElement;
    pause.addEventListener("click", () => {
      if (pause.innerText === "pause") {
        pause.innerText = "resume";
        this.game.pauseGame();
      } else {
        pause.innerText = "pause";
        this.game.resumeGame;
      }
    });
  }

  private life() {
    const life = document.getElementById("life") as HTMLElement;
    life.innerText = String(this.game.lives);
  }
}

function init() {
  const main = new Main();
}

init();
