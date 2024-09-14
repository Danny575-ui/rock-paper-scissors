let score = 0;
let humanScore = 0;
let compScore = 0;
let round = 0;
let humanOption;
let dispRound;
let arr = ["ROCK", "PAPER", "SCISSOR"];

function compInput() {
  let compOption = arr[Math.floor(Math.ramdom() * 2)];
}

function clickedPAPER() {
  humanOption = "PAPER";
  compInput();
  runRound();
}

function clickedROCK() {
  humanOption = "ROCK";
  compInput();
  runRound();
}

function clickedScissor() {
  humanOption = "SCISSOR";
  compInput();
  runRound();
}

function runRound() {
  dispRound = "ROUND " + round;
  document.getElementById("ROUND").innerHTML = dispRound;
  if (round <= 5) {
    if (
      (humanOption == "ROCK" && compOption == "SCISSOR") ||
      (humanOption == "PAPER" && compOption == "ROCK") ||
      (humanOption == "SCISSOR" && compOption == "PAPER")
    ) {
      result = "You Won!\n";
      choice = "You chose " + humanOption + " computer chose " + compOption;
      humanScore = humanScore + 1;
    } else if (
      (humanOption == "SCISSOR" && compOption == "ROCK") ||
      (humanOption == "ROCK" && compOption == "PAPER") ||
      (humanOption == "PAPER" && compOption == "SCISSOR")
    ) {
      result = "You Lost!\n";
      choice = "You chose " + humanOption + " computer chose " + compOption;
      compScore = compScore + 1;
    } else if (humanOption == compOption) {
      result = "It's a Tie!";
      choice = "You both chose " + humanOption;
    }

    if (humanScore == 5) {
      result = "You Won the game!";
      disableButtons();
    } else if (compScore == 5) {
      result = "You Lost the game!";
      disableButtons();
    }
  }
}
