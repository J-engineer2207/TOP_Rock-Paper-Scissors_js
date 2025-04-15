// Create a random function called getComputerChoice
//Create an if statement with a logical operator
//In the if statement return 'rock' 
//Create an else if statement with a logical operator
//In the else if statement return 'paper'
//Create an else statement that returns 'scissors'
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

    
//Create a function called getHumanChoice
//In the function create a prompt method with default text
function getHumanChoice() {
    let result = prompt("Choose your weapon");
    return result = result.toLowerCase();
    
    
}

//Create a function called playRound which has two parameters
//Make the functions humanChoice parameter case-insensitive
//In the function produce a string that represents the round winner
// Increment the computerScore or humanScore variable based on winner

function playRound(humanChoice,computerChoice) {
    let humanScore  = 0;
    let computerScore = 0;

    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log('You Win!, Scissors beats Paper');
        return 'Human';
        
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win!, Paper beats Rock');
        return 'Human';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win!, Rock beats Scissors')
        
        return 'Human';
    } else if (humanChoice === computerChoice) {
        console.log('Draw, Play again');
        return 'Draw'
    } else {
        console.log('You Lose!, Try again');
        return 'Computer';
    }
}




//Create a function called playGame
//Initialize humanScore and ComputerScore to zero
//Repeat 5 time:
//get the computerChoice
//get the humanChoice
//play a round using the computerChoice & humanChoice
//give score of round
//After 5 rounds:
//give total score of round
//Determine winner and display message "You won, Congradulations"

function playGame() {
    let humanScore  = 0;
    let computerScore = 0;
    
    for(i = 1; i<=5;i++){
        console.log('--- Game Round:', i, '---');
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(3);
        const result = playRound(humanChoice,computerChoice);

        if (result === 'Human') {
            humanScore++;
        } else if (result === 'Computer') {
            computerScore++;
        }

        console.log('Score after round',i, 'Human:',humanScore, 'Computer:',computerScore);
    }

    console.log('--- FINAL RESULT ---');
    if (humanScore > computerScore) {
        console.log('You WON the game!!!', 'Human:',humanScore, 'Computer:',computerScore);

    } else if (ComputerScore > HumanScore) {
        console.log('Computer WON the game!!!', 'Human:',humanScore,'Computer:',computerScore);

    } else {
        console.log('It"s a tie,','Human:',humanScore,'Computer:',computerScore);
    }
}

playGame();
