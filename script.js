const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choice[(Math.random() * choice.length)];
}

