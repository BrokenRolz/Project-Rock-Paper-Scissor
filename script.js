function getComputerChoice(){
    const choices = ["Rock" , "Paper" , "Scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    const choice = choices[randomNum];
    return choice;
}