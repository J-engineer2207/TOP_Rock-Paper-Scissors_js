// Create a random function called getComputerChoice
//Create an if statement with a logical operator
//In the if statement return 'rock' 
//Create an else if statement with a logical operator
//In the else statement return 'paper'
//Create another elseif statement with a logical operator
//In the elseif statement return 'scissors'
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
    
 //Create a function called getHumanChoice
 //In the function create a prompt window method with default text
 function getHumanChoice() {
    let result = prompt("Choose your weapon");
    console.log("Human:",result)
    
 }
 getHumanChoice();
 console.log(getHumanChoice);

