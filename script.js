const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choice) {
   return choice[Math.floor(Math.random()*choice.length)];
}
// console.log(getComputerChoice(choice));