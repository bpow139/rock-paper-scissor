function getComputerChoice() {
    // input: None
    // output: random selection of rock, paper, or scissor.

    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {

    let playerSelection = prompt("What are you throwing!!!");
    let computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    switch (playerSelection) {

        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("You both threw ROCK!, play another round!");
                    playRound();
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
                    playRound();
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
                    playRound();
                    break;

            }
            break;
        default:
            console.log("Something went wrong with your input. Try and focus!");
            playRound();
    }

    return winner;
}

function updatedScore(score) {
    console.log("Player: " + score[0] + " vs. Computer:" + score[1]);
}


function playGame(numberOfGames = 1) {
    let score = [0, 0];

    for (let i = 0; i < numberOfGames; i++) {

        winner = playRound();

        if (winner === "player") {
            score[0] = score[0] + 1;
            updatedScore(score);
        }
        else {
            score[1] = score[1] + 1;
            updatedScore(score);
        }

    }

    if (score[0] > score[1]) {
        updatedScore(score);
        console.log("Alright! you fucking won the match!");
    }

    else if (score[0] < score[1]) {
        updatedScore(score);
        console.log("Damn, looks like you utterly failed. Better luck next time.");
    }

    else {
        updatedScore(score);
        console.log("It seems you have tied!");
    }

}