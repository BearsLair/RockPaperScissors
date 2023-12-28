const rockBtn = document.querySelector(".btns > #rock");
const paperBtn = document.querySelector(".btns > #paper");
const scissorsBtn = document.querySelector(".btns > #scissors");
const compSelect = document.querySelector(".results > h4");
const round = document.querySelector(".round");
const result = document.querySelector(".results > h3");
const startover = document.querySelector("#startover");
let currentRound = 1;
round.innerHTML = currentRound;

function getComputerChoice() {
  //Random number from 0-2 chosen
  let computerChoice = Math.floor(Math.random() * 3);

  //If-else statement to translate number to string
  if (computerChoice === 0) {
    return (computerSelection = "rock");
  } else if (computerChoice === 1) {
    return (computerSelection = "paper");
  } else if (computerChoice === 2) {
    return (computerSelection = "scissors");
  }
}

function displayComputerChoice() {
  if (computerSelection === "rock") {
    compSelect.textContent =
      "You chose " + playerSelection + ". " + "The Computer chose Rock!";
  } else if (computerSelection === "paper") {
    compSelect.textContent =
      "You chose " + playerSelection + ". " + "The Computer chose Paper!";
  } else if (computerSelection === "scissors") {
    compSelect.textContent =
      "You chose " + playerSelection + ". " + "The Computer chose Scissors!";
  }
}

function playRound(playerSelection, computerSelection) {
  //If-else statements for all possible cases, including ties
  if (playerSelection == "rock" && computerSelection == "rock") {
    return (roundResult = "Tied! You both picked rock!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return (roundResult = "You lose! Paper beats rock.");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return (roundResult = "You win! Rock beats scissors.");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return (roundResult = "You win! Paper beats rock.");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return (roundResult = "Tied! You both picked paper!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return (roundResult = "You lose! Scissors beats paper.");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return (roundResult = "You lose! Rock beats scissors.");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return (roundResult = "Tied! You both picked scissors!");
  }
}

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  Game();
  if (currentRound < 5) {
    currentRound++;
    round.innerHTML = currentRound;
  } else {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  Game();
  if (currentRound < 5) {
    currentRound++;
    round.innerHTML = currentRound;
  } else {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  Game();
  if (currentRound < 5) {
    currentRound++;
    round.innerHTML = currentRound;
  } else {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

function Game() {
  getComputerChoice();
  displayComputerChoice();

  playRound(playerSelection, computerSelection);

  result.textContent = roundResult;
}

startover.addEventListener("click", () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  currentRound = 1;
  round.innerHTML = currentRound;
});
