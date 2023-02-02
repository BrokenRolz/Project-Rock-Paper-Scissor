const choice = ["Rock", "Paper", "Scissor"];

function getComputerChoice(choice) {
   return choice[Math.floor(Math.random()*choice.length)];
}
// console.log(getComputerChoice(choice));

function playRound(playerSelection, computerSelection) {
   computerSelection = getComputerChoice(choice).toLowerCase();
   playerSelection = playerSelection.toLowerCase();
   if (playerSelection == computerSelection){
      return "Tie";
   }else if(
      (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissor") ||
      (playerSelection == "scissor" && computerSelection == "rock")
   )  {return "You Lost";
   }else if(
      (computerSelection == "rock" && playerSelection == "paper") ||
      (computerSelection == "paper" && playerSelection == "scissor") ||
      (computerSelection == "scissor" && playerSelection == "rock")
   ){return "You Won";}
}

// const playerSelection = "Scissor";
// const computerSelection = getComputerChoice(choice);
// console.log(playRound(playerSelection, computerSelection));