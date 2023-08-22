import { Result } from './result';
import * as _ from 'lodash';

export class Scoreboard {

    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
        let allCapsName: string = _.upperCase(newResult.playerName);
        console.log(`${allCapsName}: ${newResult.score}`);
    }

    updateScoreboard(): void {
        
        let output = `<h2>Scoreboard</h2>`;

        // Loop results array and produce HTML output
        this.results.forEach((result, idx, array) => {
            output += `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
        });

        document.getElementById('scores')!.innerHTML = output;
    }
}