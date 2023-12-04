function getComputerChoice() {
    //Switch statement for Rock, Paper, Scissors based on randomly chosen number
    let computerSelection = "";

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    
    //Return that variable out of the function
    return computerSelection;
};

function playRound(playerSelection,computerSelection) {
    //Variable for result
    let roundResult = "";
    //If-else statements for all possible cases, including ties
    if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = "Tied!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "You lose! Paper beats rock."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult = "Tied!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult = "Tied";
    }

    return roundResult;
};

function game() {
    //For loop 5 times
        //Prompt the user for their selection of either rock, paper, or scissors (not case-senstive), assign to playerSelection variable
        //Call getComputerChoice
        //Evaluate result with playRound, end of current loop
}