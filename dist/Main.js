import { Game } from "./Game.js";
var Main = /** @class */ (function () {
    function Main() {
        this.game = new Game();
        this.reset();
        this.pause();
        this.life();
    }
    Main.prototype.reset = function () {
        var _this = this;
        var reset = document.getElementById("reset");
        reset.addEventListener("click", function () {
            _this.game.startGame();
        });
    };
    Main.prototype.pause = function () {
        var _this = this;
        var pause = document.getElementById("pause");
        pause.addEventListener("click", function () {
            if (pause.innerText === "pause") {
                pause.innerText = "resume";
                _this.game.pauseGame();
            }
            else {
                pause.innerText = "pause";
                _this.game.resumeGame;
            }
        });
    };
    Main.prototype.life = function () {
        var life = document.getElementById("life");
        life.innerText = String(this.game.lives);
    };
    return Main;
}());
function init() {
    var main = new Main();
}
init();
