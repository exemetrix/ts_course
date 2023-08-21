class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
class Utility {
}
Utility.getInputValue = (elementID) => {
    const inputElement = document.getElementById(elementID);
    return inputElement.value;
};
class Scoreboard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
        let output = `<h2>Scoreboard</h2>`;
        this.results.forEach((result, idx, array) => {
            output += `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
        });
        document.getElementById('scores').innerHTML = output;
    }
}
class Game {
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
        console.log("New game created!");
    }
    displayGame() {
        let gameForm = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += `
            <div class="form-group">
                <label for="answer${i}" class="col-sm-2 control-label">
                    ${String(this.factor)} x ${i} = 
                </label>
                <div class="col-sm-1">
                    <input type="text" class="form-control" id="answer${i}" size="5"></input>
                </div>
            </div>
            `;
        }
        document.getElementById('game').innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    }
    calculateScore() {
        let score = 0;
        for (let i = 1; i <= this.problemCount; i++) {
            const answer = Number(Utility.getInputValue(`answer${i}`));
            if (i * this.factor === answer) {
                score++;
            }
        }
        const result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}
let newGame;
document.getElementById('startGame').addEventListener('click', () => {
    const player = new Player();
    player.name = Utility.getInputValue('playername');
    const problemCount = Number(Utility.getInputValue('problemCount'));
    const factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => { newGame.calculateScore(); });
//# sourceMappingURL=app.js.map