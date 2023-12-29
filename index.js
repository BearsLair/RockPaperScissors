const rockBtn = document.querySelector(".btns > #rock");
const paperBtn = document.querySelector(".btns > #paper");
const scissorsBtn = document.querySelector(".btns > #scissors");
const compSelect = document.querySelector(".results > h4");
const round = document.querySelector(".round");
const result = document.querySelector(".results > h3");
const startover = document.querySelector("#startover");
const userScore = document.querySelector("#userscore");
const compScore = document.querySelector("#compscore");
const match = document.querySelector("#matchresult");

let currentRound = 1;
round.innerHTML = currentRound;

let user = 0;
userScore.innerHTML = user;
let comp = 0;
compScore.innerHTML = comp;

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
    return (roundResult = "You both picked rock! Round tied!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return (roundResult = "Paper beats rock! You lose the round!");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return (roundResult = "Rock beats scissors! You win the round!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return (roundResult = "Paper beats rock! You win the round!");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return (roundResult = "You both picked paper! Round tied!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return (roundResult = "Scissors beats paper! You lose the round!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return (roundResult = "Rock beats scissors! You lose the round!");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return (roundResult = "You both picked scissors! Round tied!");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return (roundResult = "Scissors beats paper! You win the round!");
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

    Message(comp, user);
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

    Message(comp, user);
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

    Message(comp, user);
  }
});

function Game() {
  getComputerChoice();
  displayComputerChoice();

  playRound(playerSelection, computerSelection);

  result.textContent = roundResult;

  Score(playerSelection, computerSelection);
}

function Score(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    return null;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    comp++;
    return (compScore.innerHTML = comp);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    user++;
    return (userScore.innerHTML = user);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    user++;
    return (userScore.innerHTML = user);
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return null;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    comp++;
    return (compScore.innerHTML = comp);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    comp++;
    return (compScore.innerHTML = comp);
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return null;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    user++;
    return (userScore.innerHTML = user);
  }
}

startover.addEventListener("click", () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  currentRound = 1;

  round.innerHTML = currentRound;
  compSelect.innerHTML = "The computer awaits your decision!";
  result.innerHTML = "What will the result be?";

  let user = 0;
  userScore.innerHTML = user;
  let comp = 0;
  compScore.innerHTML = comp;

  match.innerHTML = "";
});

function Message(comp, user) {
  if (comp > user) {
    return (match.innerHTML = "The computer wins the match!");
  } else if (user > comp) {
    return (match.innerHTML = "You win the match!");
  } else if (user == comp) {
    return (match.innerHTML = "The match is tied!");
  }
}
