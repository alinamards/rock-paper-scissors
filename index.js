let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const list = ["Rock", "Paper", "Scissors"];
    let randomChoiceComputer = list[Math.floor(Math.random() * list.length)];
    return randomChoiceComputer;
}

function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?");
    return playerChoice;
} 

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore = ++computerScore;
        console.log(`You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`
        );
    } else {
        playerScore = ++playerScore;
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
        );
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > playerScore) {
        console.log("You lost!");
    } else {
        console.log("It's a tie...");
    }
    
}

