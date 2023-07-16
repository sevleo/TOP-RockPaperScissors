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

    if (playerSelection.toLowerCase() === getComputerChoice) {
        
        return "Draw";
    }

    else if ((playerSelection.toLowerCase() === "rock" || getComputerChoice === "rock") && (playerSelection.toLowerCase() === "scissors" || getComputerChoice === "scissors")){
        if (playerSelection.toLowerCase() === "rock") {
            playerScore += 1;
            updateScore();
            return "Rock beats Scissors. You win!";
        }
        else
            computerScore += 1;
            updateScore();
            return "Rock beats Scissors. You lose!";
    }

    else if ((playerSelection.toLowerCase() === "rock" || getComputerChoice === "rock") && (playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper")){
        if (playerSelection.toLowerCase() === "rock") {
            computerScore += 1;
            updateScore();
            return "Paper beats Rock. You lose!";
        }
        else
            playerScore += 1;
            updateScore();
            return "Paper beats Rock. You win!";
    }

    else if ((playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper") && (playerSelection.toLowerCase() === "scissors" || getComputerChoice === "scissors")){
        if (playerSelection.toLowerCase() === "paper") {
            computerScore += 1;
            updateScore();
            return "Scissors beat Paper. You lose!";
        }
        else
            playerScore += 1;
            updateScore();
            return "Scissors beat Paper. You win!";
    }
    
    else
        playerScore -= 1; 
        updateScore();
        return "This move is illegal! Taking one point from the player."
}

let resultsDiv = document.querySelector('.results');
let playerChoiceDiv = document.querySelector('.player-choice');
let computerChoiceDiv = document.querySelector('.computer-choice');

const weaponDiv = document.querySelector('div.weapon');

const btns = Array.from(weaponDiv.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener("click", handleClick));

function handleClick(e) {
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.id;


    playerChoiceDiv.textContent = `The player chose ${playerChoice} as a weapon!`;
    computerChoiceDiv.textContent = `The computer counters with ${computerChoice}.`;
    resultsDiv.textContent = playRound(playerChoice, computerChoice);

}


playerScore = 0;
computerScore = 0;

let scorePlayerNode = document.querySelector('.score-player');
let scoreComputerNode = document.querySelector('.score-computer');
let matchResultNode = document.querySelector('.match-result');

function updateScore() {
    if (playerScore == 5 ) {
        matchResultNode.textContent = "You win!";
    }

    else if (computerScore == 5) {
        matchResultNode.textContent = "Computer wins!"
    }
    scorePlayerNode.textContent = `Player score: ${playerScore}`;
    scoreComputerNode.textContent = `Computer score: ${computerScore}`;
}

