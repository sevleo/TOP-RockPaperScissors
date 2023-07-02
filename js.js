function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return "rock"
    }
    else if (computerChoice ===2) {
        return "paper"
    }
    else 
        return "scissors"
}


function playRound (playerSelection='rock', getComputerChoice) {
    console.log(playerSelection);
    console.log(getComputerChoice);

    if (playerSelection.toLowerCase() === getComputerChoice) {
        
        return "Draw";
    }

    else if ((playerSelection.toLowerCase() === "rock" || getComputerChoice === "rock") && (playerSelection.toLowerCase() === "scissors" || getComputerChoice === "scissors")){
        if (playerSelection.toLowerCase() === "rock") {
            playerScore += 1;
            return "Rock beats Scissors. You win!";
        }
        else
            computerScore += 1;
            return "Rock beats Scissors. You lose!";
    }

    else if ((playerSelection.toLowerCase() === "rock" || getComputerChoice === "rock") && (playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper")){
        if (playerSelection.toLowerCase() === "rock") {
            computerScore += 1;
            return "Paper beats Rock. You lose!";
        }
        else
            playerScore += 1;
            return "Paper beats Rock. You win!";
    }

    else if ((playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper") && (playerSelection.toLowerCase() === "scissors" || getComputerChoice === "scissors")){
        if (playerSelection.toLowerCase() === "paper") {
            computerScore += 1;
            return "Scissors beat Paper. You lose!";
        }
        else
            playerScore += 1;
            return "Scissors beat Paper. You win!";
    }
    
    else
        playerScore -= 1; 
        return "This move is illegal! Taking one point from the player."
}


function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`The player's score is ${playerScore}. The computer's score is ${computerScore}. `)
    if (playerScore > computerScore) {
        console.log("Player is the winner!")
    }
    else if (computerScore > playerScore) {
        console.log("Computer is the winner!")
    }
    else console.log("Player and computer have a tie!")
}

game();