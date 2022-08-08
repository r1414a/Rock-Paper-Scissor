
const result = document.getElementById("result");
const userChoice = document.getElementById("userinput");
const compChoice = document.getElementById("computerinput");
const btn = document.querySelectorAll("button");
const uc = document.getElementById('uc')
const cc = document.getElementById('cc')
let i;
let userScore = 0;
let computerScore = 0;

const rpsArray = ["rock","paper","scissors"];

btn.forEach(function(i){
    i.addEventListener("click", function(){
    userChoice.setAttribute("id",this.getAttribute("id"));
    computerChoice();
    checkResult();
    });
});

function computerChoice () {
   compChoice.setAttribute("id",rpsArray[Math.floor(Math.random() * 3)]);
    
}

function checkResult () {
    console.log(userChoice.getAttribute('id'));
    console.log(compChoice.getAttribute('id'));
    if(compChoice.getAttribute('id') === userChoice.getAttribute('id') || compChoice.getAttribute('id') === userChoice.getAttribute('id') || compChoice.getAttribute('id') === userChoice.getAttribute('id')){
        result.innerText = "IT'S A DRAW !!!!"
    }else if((userChoice.getAttribute('id') === 'paper' && compChoice.getAttribute('id') === 'rock') || (userChoice.getAttribute('id') === 'scissors' && compChoice.getAttribute('id') === 'paper') || (userChoice.getAttribute('id') === 'rock' && compChoice.getAttribute('id') === 'scissors')){
        uc.style.color = "green";
        userScore++;
        result.innerText = "YOU WIN !!!!";
        uc.innerText = userScore;
    }else {
        cc.style.color = "red";
        computerScore++;
        result.innerText = "YOU LOST !!!!"
        cc.innerText = computerScore;
    } 
}