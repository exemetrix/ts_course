"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
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
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map