const choices = ["Rock", "Paper", "Scissors"];
const max =3;

function getComputerChoice(){
    var compChoice ="";
    var randValue= Math.floor(Math.random() * max);
    if(randValue === 0){
        compChoice = "Rock";
    }
    if(randValue === 1){
        compChoice = "Paper";
    }
    if(randValue === 2){
        compChoice = "Scissors";
    }
    return compChoice;
}

function getUserChoice(){
    var userChoice = prompt("What's your choice?");
    if (userChoice.toLowerCase() === "rock"){
        userChoice = "Rock";
    }
    if (userChoice.toLowerCase() === "paper"){
        userChoice = "Paper";
    }
    if (userChoice.toLowerCase() === "scissors"){
        userChoice = "Scissors";
    }
    
    return userChoice;
}

var userScore = 0;
var CompScore = 0;
var roundNum  = 1;


//console.log("Comp: "+getComputerChoice())
//console.log("User: " +getUserChoice())

function playRound(userChoice,compChoice){
    console.log("Round - "+ roundNum);
    console.log(userChoice+" VS "+compChoice);

    if (userChoice === compChoice){
        console.log("It's a Draw -" + "You both played "+userChoice);
        
    }
    if(userChoice === "Rock" && compChoice ==="Scissors"|| userChoice === "Paper" && compChoice ==="Rock"||userChoice === "Scissors" && compChoice ==="Paper"){
        console.log("You Win!");    
        userScore++; 
    }
    if(userChoice === "Rock" && compChoice ==="Paper"|| userChoice === "Paper" && compChoice ==="Scissors"||userChoice === "Scissors" && compChoice ==="Rock"){
        console.log("You Lost!");   
        CompScore++  
    }
    roundNum++;
    console.log("User-Score-"+ userScore);
    console.log("Computer-Score-"+ CompScore);
}




for (let i = 0; i < 5; i++) {
    playRound(getUserChoice(),getComputerChoice());
  }