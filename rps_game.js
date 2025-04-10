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
        console.log('Computer:', rock); 
        
    } else if (x === 2) {
        let paper = 'paper';
        console.log('Computer:', paper);
        
    } else {
        let scissors = 'scissors';
        console.log('Computer:', scissors);
        
    }
}

    
//Create a function called getHumanChoice
//In the function create a prompt window method with default text
function getHumanChoice() {
    let result = prompt("Choose your weapon");
    console.log("Human:",result.toLowerCase())
    
}


let humanScore  = 0;
let computerScore = 0;
//Create a function called playRound which has two parameters
//Make the functions humanChoice parameter case-insensitive
//In the function produce a string that repre
//sents the round winner
// Increment the computerScore or humanScore variable based on winner
function playRound(humanChoice,computerChoice) {
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log('You Win!, Scissors beats Paper');
        humanScore += 1;
        console.log('Computer:'+computerScore + ' ' + 'Human:' +humanScore)
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win!, Paper beats Rock');
        humanScore += 1;
        console.log('Computer:' +computerScore + ' ' + 'Human:' +humanScore);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win!, Rock beats Scissors')
        humanScore += 1;
        console.log('Computer:' +computerScore + ' ' + 'Human:' +humanScore);
    } else if (humanChoice === computerChoice) {
        console.log('Draw, Play again');
        console.log('Computer:' +computerScore + ' ' + 'Human:' +humanScore);
    } else {
        console.log('You Lose!, Try again');
        computerScore += 1;
        console.log('Computer:' +computerScore + ' ' + 'Human:' +humanScore);
    }
}


playRound(getHumanChoice(),getComputerChoice(3));
// console.log(playRound(humanChoice,computerChoice(3)));