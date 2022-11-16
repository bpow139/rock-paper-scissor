
function getComputerChoice() {
    // input: None
    // output: random selection of rock, paper, or scissor.

    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore(winner, score) {
    if (winner == 'player') {
        score[0] = score[0] + 1;
    }
    else if (winner == 'computer') {
        score[1] = score[1] + 1;
    }
    else {

    }
    return score;
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {

        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("You both threw ROCK!, play another round!");
                    winner = null;
                    break;

                case "paper":
                    console.log("Ouch! You threw ROCK and they threw PAPER. Paper beats Rock so you are a loser.");
                    winner = "computer";

                    break;

                case "scissor":
                    console.log("Ha! you threw ROCK and they threw SCISSOR. You crushed them! Winner winner chicken dinner.");
                    winner = "player";

                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("Alright! you threw PAPER and they threw ROCK. Cover their ass! you are a winner!");
                    winner = "player";
                    break;

                case "paper":
                    console.log("Woops looks like you both threw PAPER, maybe play another round?");
                    winner = null;
                    break;

                case "scissor":
                    console.log("Oh no! you threw PAPER and they threw SCISSOR. They are gunna snip you! You are such a loser.");
                    winner = "computer";
                    break;

            }
            break;
        case "scissor":
            switch (computerSelection) {
                case "rock":
                    console.log("Argggggh. you threw SCISSOR and they threw ROCK. This is gunna hurt you loser.");
                    winner = "computer";
                    break;

                case "paper":
                    console.log("You threw SCISSOR and they threw PAPER. Paper is so flimsy you will cut them like butter. Victor!");
                    winner = "player";
                    break;

                case "scissor":
                    console.log("Woopsy Daisy. Looks like you both threw SCISSOR. Maybe try playing another round?");
                    winner = null;
                    break;

            }
            break;
        default:
            console.log("Something went wrong with your input. Try and focus!");
            break;
    }

    return winner;
}

function updateScoreboard(score) {

    let playerScore = document.getElementById('player-score');
    playerScore.textContent = score[0];

    let computerScore = document.getElementById('computer-score');
    computerScore.textContent = score[1];
}

function displayWinner(score) {
    let body = document.querySelector('body');
    let displayWinner = document.createElement('div');

    displayWinner.classList.add('display-winner');

    if (score[0] > score[1]) {
        displayWinner.textContent = 'Alright you fucking won!';
    }
    else if (score[0] < score[1]) {
        displayWinner.textContent = 'Woof, looks like you lost this time.   :(';
    }
    else {
        displayWinner.textContent = 'Seems like we have a tie.';
    }

    body.appendChild(displayWinner);

}

function startGame() {
    let numberOfRounds = document.getElementById('rounds').value;
    let score = [0, 0];
    updateScoreboard(score);

    const rockListener = document.querySelector('.rock');
    rockListener.addEventListener('click', (e) => {
        score = updateScore(playRound(e.srcElement.alt), score);
        console.log(score);
        updateScoreboard(score);
        if (score[0] + score[1] >= numberOfRounds) {
            displayWinner(score);
            setTimeout(() => {
                location.reload();
            }, 3000);
        }

    }
    );

    const paperListener = document.querySelector('.paper');
    paperListener.addEventListener('click', (e) => {
        score = updateScore(playRound(e.srcElement.alt), score);
        console.log(score);
        updateScoreboard(score);
        if (score[0] + score[1] >= numberOfRounds) {
            displayWinner(score);
            setTimeout(() => {
                location.reload();
            }, 3000);

        }

    }
    );

    const scissorListener = document.querySelector('.scissor');
    scissorListener.addEventListener('click', (e) => {
        score = updateScore(playRound(e.srcElement.alt), score);
        console.log(score);
        updateScoreboard(score);
        if (score[0] + score[1] >= numberOfRounds) {
            displayWinner(score);
            setTimeout(() => {
                location.reload();
            }, 3000);


        }

    }
    );

    return true;

}

let hasGameStarted = false;

if (!hasGameStarted) {
    hasGameStarted = document.querySelector('button').addEventListener('click', startGame);
}
else {

}
