// Create a random function called getComputerChoice
function getComputerChoice(value) {
    let x = Math.floor(Math.random() * value) + 1;
    if (x === 1) {
        return 'rock'
    } else if (x === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
getComputerChoice(3);
console.log(getComputerChoice(3));
    
//Create an if statement with a logical operator
//In the if statement return 'rock' 
//Create an elseif statement with a logical operator
//In the elseif statement return 'paper'
//Create another elseif statement with a logical operator
//In the elseif statement return 'scissors' 

