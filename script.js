
function compare(userChoice,compChoice){
    if(userChoice === "Rock" && compChoice ==="Scissors"|| userChoice === "Paper" && compChoice ==="Rock"||userChoice === "Scissors" && compChoice ==="Paper"){  
        userScore++; 
    }
    if(userChoice === "Rock" && compChoice ==="Paper"|| userChoice === "Paper" && compChoice ==="Scissors"||userChoice === "Scissors" && compChoice ==="Rock"){
        compScore++  
    }
}
let userScore = 0;
let compScore = 0;

let userChoice =""
let compChoice=""

function updateScore(){
    const userScoreElem = document.getElementById("userScore").innerHTML = userScore;
    const compScoreElem = document.getElementById("compScore").innerHTML = compScore;
}


function getComputerChoice(){
    const max =3;
    var randValue= Math.floor(Math.random() * max);
    if(randValue === 0){
        compImg.style.visibility = "visible";
        compImg.src ="images/stone.png";
        return compChoice ="Rock";
    }
    if(randValue === 1){
        compImg.style.visibility = "visible";
        compImg.src ="images/paper.png";
        return compChoice ="Paper";
    }
    if(randValue === 2){
        compImg.style.visibility = "visible";
        compImg.src ="images/scissor.png";
        return compChoice ="Scissors";
    }
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
    userImg.src ="/images/stone.png";
    userChoice ="Rock";
    getComputerChoice()
    compare(userChoice,getComputerChoice());
    updateScore()

})

paperButton.addEventListener("click",()=>{
    userImg.style.visibility = "visible";
    userImg.src ="/images/paper.png";
    userChoice ="Paper";
    getComputerChoice()
    compare(userChoice,getComputerChoice());
    updateScore()
})

scissorsButton.addEventListener("click",()=>{
    userImg.style.visibility = "visible";
    userImg.src ="/images/scissor.png";
    userChoice ="Scissors";
    getComputerChoice()
    compare(userChoice,getComputerChoice());
    updateScore()
})