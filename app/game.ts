/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

// import {html} from 'lit-html'

class Game {

    private scoreboard: Scoreboard = new Scoreboard();
    // player: Player;
    // problemCount: number;
    // factor: number;

    // TS approach to define a constructor with a set of attributes. 
    // Object attributes can be omitted above. TS compiler will handle that for us.
    constructor(public player: Player, public problemCount: number, public factor: number) {
        console.log("New game created!");
    }

    /*

    The classical approach to define a constructor and initialize attributes

    constructor(newPlayer: Player, numbOfProblems: number, multFactor: number) {
        this.player = newPlayer;
        this.problemCount = numbOfProblems;
        this.factor = multFactor;
    }
    */

    displayGame(): void {

        let gameForm: string = '';

        for (let i=1; i<=this.problemCount; i++) {
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

        document.getElementById('game')!.innerHTML = gameForm; // Add the new game to the page
        document.getElementById('calculate')!.removeAttribute('disabled'); // Enable 'Calculate' score button
    }

    calculateScore(): void {

        let score: number = 0;

        for(let i=1; i<=this.problemCount; i++) {
            const answer: number = Number(Utility.getInputValue(`answer${i}`));
            if(i * this.factor === answer) {
                score++;
            }
        }

        // Create a new result object to pass to the scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        // Add the new result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        // Disable the 'Calculate' score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}