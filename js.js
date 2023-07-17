let beginBtn = document.querySelector('#game-start');
beginBtn.addEventListener("click", beginMatch);

playerScore = 0;
computerScore = 0;

const scorePlayerNode = document.createElement("div");
scorePlayerNode.classList.add("score-player");
scorePlayerNode.textContent = `Your score is 0.`;

const scoreComputerNode = document.createElement("div");
scoreComputerNode.classList.add("score-computer");
scoreComputerNode.textContent = `Computer score is 0.`;

const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.classList.add("player-choice");

const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.classList.add("computer-choice");

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("results");

const matchResultDiv = document.createElement("div");
matchResultDiv.classList.add("match-result-div");

function beginMatch() {
    playerScore = 0;
    computerScore = 0;
    const weaponDiv = document.createElement("div");
    weaponDiv.classList.add("weapon");
    document.body.append(weaponDiv);
    const weaponDivText = document.createElement("div");
    weaponDivText.textContent = "Choose your weapon";
    weaponDivText.classList.add("weapon-div-text");
    weaponDiv.append(weaponDivText);
    beginBtn.remove();
    playerChoiceDiv.remove();
    computerChoiceDiv.remove();
    resultsDiv.remove();
    matchResultDiv.remove();
    scorePlayerNode.textContent = `Player score: ${playerScore}`;
    scoreComputerNode.textContent = `Computer score: ${computerScore}`;

    const weapons = ["Rock", "Paper", "Scissors"];

    weapons.forEach((weapon) => {
        const btn = document.createElement("button");
        btn.id = weapon.toLocaleLowerCase();
        btn.textContent = weapon;
        weaponDiv.append(btn);
        btn.addEventListener("click", handleClick)
    })


    document.body.append(scorePlayerNode);

    document.body.append(scoreComputerNode);
}


function handleClick(e) {
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.id;

    document.body.append(playerChoiceDiv);    
    document.body.append(computerChoiceDiv);
    document.body.append(resultsDiv);

    playerChoiceDiv.textContent = `You chose ${playerChoice.toUpperCase()}.`;
    computerChoiceDiv.textContent = `Computer chose ${computerChoice.toUpperCase()}.`;
    resultsDiv.textContent = playRound(playerChoice, computerChoice);
}


function updateScore() {
    if (playerScore == 2 || computerScore == 2) {
        document.body.append(matchResultDiv);
        const weaponDiv = document.querySelector('div.weapon');
        weaponDiv.remove();

        beginBtn = document.createElement('button');
        beginBtn.textContent = 'Begin new match';
        beginBtn.id = 'game-start';
        document.body.insertBefore(beginBtn, scorePlayerNode);
        beginBtn.addEventListener("click", beginMatch);
    
        if (playerScore == 2) {
            matchResultDiv.textContent = "Congratulations! You win the match!";
        }
        else if (computerScore == 2) {
            matchResultDiv.textContent = "Computer wins the match!"
        }
    }

    scorePlayerNode.textContent = `Player score: ${playerScore}`;
    scoreComputerNode.textContent = `Computer score: ${computerScore}`;
}


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
