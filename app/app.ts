import * as Helpers from "./utility";
import { Player } from "./player";
import { Game } from "./game";

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    
    const player: Player = new Player();

    player.name = Helpers.getValue('playername');
    
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// Add click listener for 'Calculate' score button
document.getElementById('calculate')!.addEventListener('click', () => { newGame.calculateScore(); });