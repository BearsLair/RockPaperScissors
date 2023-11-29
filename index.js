function getComputerChoice() {
    //List all possible choices to choose from
    let choices = ["Rock", "Paper", "Scissors"];
    //Pick one random whole number from 0 to 2, and assign it to a variable
    //Return that variable out of the function
};

function playRound(playerSelection,computerSelection) {
    //Variable for result
    roundResult = "";
    //If-else statements for all possible cases, including ties
    if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult === "Tied!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult === "You lose! Paper beats rock."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult === "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult === "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult === "Tied!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult === "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult === "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult === "Tied";
    }

    return roundResult;
};

function game() {
    //For loop 5 times
        //Prompt the user for their selection of either rock, paper, or scissors (not case-senstive), assign to playerSelection variable
        //Call getComputerChoice
        //Evaluate result with playRound, end of current loop
}