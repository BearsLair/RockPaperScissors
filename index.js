function getComputerChoice() {
    let computerSelection = "";
    //Random number from 0-2 chosen
    let computerChoice = Math.floor(Math.random() * 3);

    //If-else statement to translate number to string
    if (computerChoice = 0) {
        return computerSelection = "rock";
    } else if (computerChoice = 1) {
        return computerSelection = "paper";
    } else if (computerChoice = 2) {
        return computerSelection = "scissors";
    }
};

function playRound(playerSelection,computerSelection) {
    //Variable for result
    let roundResult = "";
    //If-else statements for all possible cases, including ties
    if (playerSelection == "rock" && computerSelection == "rock") {
        return roundResult = "Tied!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return roundResult = "You lose! Paper beats rock."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return roundResult = "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return roundResult = "Tied!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return roundResult = "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return roundResult = "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return roundResult = "Tied";
    }
};

function game() {
    //Prompt the user for their selection of either rock, paper, or scissors (not case-senstive), assign to playerSelection variable
    let playerSelection = prompt("Rock, paper, or scissors?");
    //Call getComputerChoice
    getComputerChoice();
    //Evaluate winner
    playRound(playerSelection,computerSelection)
    //Print winner to screen
    alert(roundResult);
}