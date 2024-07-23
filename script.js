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




console.log(getComputerChoice())

