const newDiv = document.createElement("div");
newDiv.classList.add("results");
document.body.appendChild(newDiv);

const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreboard");
scoreBoard.textContent = "Player: 0 | Computer: 0";
document.body.appendChild(scoreBoard);

const resultsDiv = document.querySelector(".results");
const scoreboard = document.querySelector(".scoreboard");


function getComputerChoice(value) {
    let x = Math.floor(Math.random() * value) + 1;
    if (x === 1) {
        let rock = 'rock';
        return rock;
        
    } else if (x === 2) {
        let paper = 'paper';
        return paper;
        
    } else {
        let scissors = 'scissors';
         return scissors;
        
    }
}

    

function getHumanChoice() {
    let result = prompt("Choose your weapon");
    return result = result.toLowerCase();
    
    
}


let humanScore  = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    let winner = "";

    if (humanChoice === "scissors" && computerChoice === "paper") {
        resultsDiv.textContent = 'You Win! Scissors beats Paper';
        winner = "Human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsDiv.textContent = 'You Win! Paper beats Rock';
        winner = "Human";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultsDiv.textContent = 'You Win! Rock beats Scissors';
        winner = "Human";
    } else if (humanChoice === computerChoice) {
        resultsDiv.textContent = 'Draw, Play again';
        winner = "Draw";
    } else {
        resultsDiv.textContent = 'You Lose! Try again';
        winner = "Computer";
    }

    // Increment the score AFTER checking winner
    if (winner === "Human") {
        humanScore++;
    } else if (winner === "Computer") {
        computerScore++;
    }

    // Update scoreboard
    scoreboard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Check for end of game
    if (computerScore === 5 || humanScore === 5) {
        const finalWinner =
            humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        resultsDiv.textContent += ` ${finalWinner}`;

        disableButtons(); // Optional: prevent further play
    }
}


const button_1 = document.querySelector(".rock")
button_1.addEventListener("click", () => {
    playRound("rock",getComputerChoice(3));
})
const button_2 = document.querySelector(".paper")
button_2.addEventListener("click", () => {
    playRound("paper",getComputerChoice(3));
})
const button_3 = document.querySelector(".scissors")
button_3.addEventListener("click", () => {
    playRound("scissors",getComputerChoice(3));
})

