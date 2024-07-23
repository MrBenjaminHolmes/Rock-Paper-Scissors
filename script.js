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


console.log("Comp: "+getComputerChoice())
console.log("User: " +getUserChoice())