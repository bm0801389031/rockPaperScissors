
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Game Has Tied";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    return "You Win";
  } else {
    return " computer wins";
  }
}

function game() {
  const playerSelection = prompt("Please Enter your selection");
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection));
}