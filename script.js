// const choices = ["Rock", "Paper", "Scissors"];




// function getUserChoice(){
//     var userChoice = prompt("What's your choice?");
//     if (userChoice.toLowerCase() === "rock"){
//         userChoice = "Rock";
//     }
//     if (userChoice.toLowerCase() === "paper"){
//         userChoice = "Paper";
//     }
//     if (userChoice.toLowerCase() === "scissors"){
//         userChoice = "Scissors";
//     }
    
//     return userChoice;
// }

// var userScore = 0;
// var CompScore = 0;
// var roundNum  = 1;


// //console.log("Comp: "+getComputerChoice())
// //console.log("User: " +getUserChoice())

// function playRound(userChoice,compChoice){
//     console.log("-----Round "+ roundNum+"-----");
//     console.log(userChoice+" VS "+compChoice);

//     if (userChoice === compChoice){
//         console.log("It's a Draw -" + "You both played "+userChoice);
        
//     }
//     if(userChoice === "Rock" && compChoice ==="Scissors"|| userChoice === "Paper" && compChoice ==="Rock"||userChoice === "Scissors" && compChoice ==="Paper"){
//         console.log("You Win!");    
//         userScore++; 
//     }
//     if(userChoice === "Rock" && compChoice ==="Paper"|| userChoice === "Paper" && compChoice ==="Scissors"||userChoice === "Scissors" && compChoice ==="Rock"){
//         console.log("You Lost!");   
//         CompScore++  
//     }
//     roundNum++;
//     console.log("Your Score-"+ userScore);
//     console.log("Computer Score-"+ CompScore+"\n");
// }




// for (let i = 0; i < 5; i++) {
//     playRound(getUserChoice(),getComputerChoice());
//   }
// console.log("---FINAL SCORES---")
// console.log("Your Score-"+ userScore);
// console.log("Computer Score-"+ CompScore+"\n");

function getComputerChoice(){
    const max =3;
    var randValue= Math.floor(Math.random() * max);
    if(randValue === 0){
        compImg.style.visibility = "visible";
        compImg.src ="images/stone.png";
    }
    if(randValue === 1){
        compImg.style.visibility = "visible";
        compImg.src ="images/paper.png";
    }
    if(randValue === 2){
        compImg.style.visibility = "visible";
        compImg.src ="images/scissor.png";
    }
    return compChoice;
}

const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");

let userImg = document.querySelector("img");
userImg.style.visibility = "hidden";
let compImg = document.querySelector(".computerChoice")
compImg.style.visibility = "hidden";


rockButton.addEventListener("click",()=>{
    userImg.style.visibility = "visible";
    userImg.src ="images/stone.png";
    getComputerChoice()
})

paperButton.addEventListener("click",()=>{
    userImg.style.visibility = "visible";
    userImg.src ="images/paper.png";
    getComputerChoice()
})

scissorsButton.addEventListener("click",()=>{
    userImg.style.visibility = "visible";
    userImg.src ="images/scissor.png";
    getComputerChoice()
})