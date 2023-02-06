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
}))

//random computer choice 
function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * possibleChoice.length) + 1

   if (randomNum === 1){
      computerChoice = "rock"
   }
   if (randomNum === 2){
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
   // Trying to reset score to 0/ restart the game when either player or computer score reaches 3,
   // but its not working yet.
   if (computerScore === 3){
      alert("Game Over! You lost the game.")
      // computerScore == 0 && userScore == 0
   }else if(userScore === 3){
      alert("Game Over! You won the game.")
      // computerScore == 0 && userScore == 0
   }
   resultDisplay.innerHTML = result
   computerScoreDisplay.innerHTML = computerScore
   userScoreDisplay.innerHTML = userScore
}
