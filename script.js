let score = 0;
let humanScore = 0;
let compScore = 0;
let round = 0;
let humanOption;
let dispRound;
let compOption = 0;
let arr = ["rock", "paper", "scissor"];

function compInput() {
  compOption = arr[Math.floor(Math.random() * 2)];
  document.getElementById("new").innerHTML = compOption;

  return;
}

console.log("CONNECTED!");
document.getElementById("round").innerHTML = "ROUND  " + round;

function clickedPaper() {
  humanOption = "paper";
  runRound();
  return;
}

function clickedRock() {
  humanOption = "rock";
  runRound();
  return;
}

function clickedScissor() {
  humanOption = "scissor";

  runRound();
  return;
}

function runRound() {
  if (round <= 5) {
    compInput();
    if (
      (humanOption == "rock" && compOption == "scissor") ||
      (humanOption == "paper" && compOption == "rock") ||
      (humanOption == "scissor" && compOption == "paper")
    ) {
      result = "You Won!\n";
      choice = "You chose " + humanOption + " computer chose " + compOption;
      humanScore = humanScore + 1;
    } else if (
      (humanOption == "scissor" && compOption == "rock") ||
      (humanOption == "rock" && compOption == "paper") ||
      (humanOption == "paper" && compOption == "scissor")
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
    } else if (compScore == 5) {
      result = "You Lost the game!";
    }
  }

  document.getElementById("choice").innerHTML = choice;
  document.getElementById("result").innerHTML = result;
  document.getElementById("humanscore").innerHTML = humanScore;
  document.getElementById("compscore").innerHTML = compScore;
  return;
}
