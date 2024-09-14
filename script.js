let humanScore = 0;
let compScore = 0;

let humanOption;
let compOption = 0;

let arr = ["rock", "paper", "scissor"];

console.log("CONNECTED!");

function compInput() {
  compOption = arr[Math.floor(Math.random() * 2)];
  return;
}

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
    humanScore = 0;
    compScore = 0;
    window.alert("YOU WIN!!");
  } else if (compScore == 5) {
    humanScore = 0;
    compScore = 0;

    window.alert("YOU LOSE!!");
  }

  document.getElementById("choice").innerHTML = choice;

  document.getElementById("humanscore").innerHTML = "YOUR SCORE: " + humanScore;
  document.getElementById("compscore").innerHTML =
    "COMPUTER SCORE: " + compScore;
  return;
}
