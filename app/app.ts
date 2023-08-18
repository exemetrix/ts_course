function startGame() {

    // Start a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}

const logPlayer = (name: string = 'MultiMath Player'): void => console.log(`Starting a new game for player: ${name}`);

const getInputValue = (elementID: string): string | undefined => {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value === '' ? undefined : inputElement.value;
}

const postScore = (score: number, playerName: string = 'MultiMath Player'): void => {

    let logger: (value: string) => void; // Type of logger should be a function that expects a string and doesn't return
    logger = (score > 0) ? logMessage : logError;

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
    console.error(err);
}


document.getElementById('startGame')!.addEventListener('click', startGame);