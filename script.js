const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const computerScoreDisplay = document.getElementById('computer-score')
const userScoreDisplay = document.getElementById('user-score')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let computerScore = 0
let userScore = 0

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
   getComputerChoice()
   getResult()
   score()
   // playRound()
}))

//random computer choice 
function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * possibleChoice.length) + 1

   if (randomNum === 1){
      computerChoice = "rock"
   }
   if (randomNum === 21){
      computerChoice = "paper"
   }
   if (randomNum === 3){
      computerChoice = "scissor"
   }
   computerChoiceDisplay.innerHTML = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
}

// result and scores
function getResult() {
   if (userChoice === computerChoice){
      result = "Tie";
   }
   if(
      (userChoice == "rock" && computerChoice == "paper") ||
      (userChoice == "paper" && computerChoice == "scissor") ||
      (userChoice == "scissor" && computerChoice == "rock")
   ){result = "You Lost";
      computerScore = ++computerScore
   }
   if(
      (computerChoice == "rock" && userChoice == "paper") ||
      (computerChoice == "paper" && userChoice == "scissor") ||
      (computerChoice == "scissor" && userChoice == "rock")
   ){result = "You Won";
      userScore = ++userScore
   }
   resultDisplay.innerHTML = result
   computerScoreDisplay.innerHTML = computerScore
   userScoreDisplay.innerHTML = userScore
}

// function playRound() {
//    if (computerScore === 3 && userScore < 3){
//       result = "Game Over! You lost the game.";
//       return computerScore == 0 && userScore == 0
//    }
//    if (userScore === 3 && computerScore < 3){
//       result = "Game Over! You won the game.";
//       return computerScore == 0 && userScore == 0
//    }
// }
