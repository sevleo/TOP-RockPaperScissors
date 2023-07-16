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
            // playerScore += 1;
            return "Rock beats Scissors. You win!";
        }
        else
            // computerScore += 1;
            return "Rock beats Scissors. You lose!";
    }

    else if ((playerSelection.toLowerCase() === "rock" || getComputerChoice === "rock") && (playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper")){
        if (playerSelection.toLowerCase() === "rock") {
            // computerScore += 1;
            return "Paper beats Rock. You lose!";
        }
        else
            // playerScore += 1;
            return "Paper beats Rock. You win!";
    }

    else if ((playerSelection.toLowerCase() === "paper" || getComputerChoice === "paper") && (playerSelection.toLowerCase() === "scissors" || getComputerChoice === "scissors")){
        if (playerSelection.toLowerCase() === "paper") {
            // computerScore += 1;
            return "Scissors beat Paper. You lose!";
        }
        else
            // playerScore += 1;
            return "Scissors beat Paper. You win!";
    }
    
    else
        // playerScore -= 1; 
        return "This move is illegal! Taking one point from the player."
}

// let results = document.getElementsByClassName('results');
let resultsDiv = document.querySelector('.results');
let playerChoiceDiv = document.querySelector('.player-choice');
let computerChoiceDiv = document.querySelector('.computer-choice');
// const para = document.createTextNode("test");


const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener("click", handleClick));

function handleClick(e) {
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.id;


    playerChoiceDiv.textContent = `The player chose ${playerChoice} as a weapon!`;
    computerChoiceDiv.textContent = `The computer counters with ${computerChoice}.`;
    resultsDiv.textContent = playRound(playerChoice, computerChoice);

}




