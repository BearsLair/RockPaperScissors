function getComputerChoice() {
    let computerSelection = 0;
    //Random number from 0-2 chosen
    let computerChoice = Math.floor(Math.random() * 3);

    //If-else statement to translate number to string
    if (computerChoice === 0) {
        computerSelection = "rock";
    } else if (computerChoice === 1) {
        computerSelection = "paper";
    } else if (computerChoice === 2) {
        computerSelection = "scissors";
    };
   return computerSelection
};

function playRound(playerSelection,computerSelection) {
    //Variable for result
    let roundResult = "";
    //If-else statements for all possible cases, including ties
    if (playerSelection == "rock" && computerSelection == "rock") {
        return roundResult = "Tied! You both picked rock!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return roundResult = "You lose! Paper beats rock."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return roundResult = "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return roundResult = "Tied! You both picked paper!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return roundResult = "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return roundResult = "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return roundResult = "Tied! You both picked scissors!";
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        //Prompt the user for their selection of either rock, paper, or scissors (not case-senstive), assign to playerSelection variable
        let playerSelection = "";
        let computerSelection = "";
        playerSelection = prompt("Round " + (i + 1) + ". " + "Rock, paper, or scissors?");
        alert("You picked " + playerSelection + ".");
        //Call getComputerChoice
        computerSelection = getComputerChoice();
        alert("The computer picks " + computerSelection + ".");
        //Evaluate winner
        let roundResult = playRound(playerSelection,computerSelection)
        //Print winner to screen
        alert(roundResult);
    }
}