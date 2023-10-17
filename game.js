function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice==0)
        return "rock";
    else if (choice==1)     
        return "paper";
    else                    
        return "scissors";
}

let playerScore = 0
let computerScore = 0

function playRound(playerChoice){
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerChoice==computerChoice){
        document.getElementById('playerScore').innerHTML = 'Score : '+(++playerScore);
        document.getElementById('computerScore').innerHTML = 'Score : '+(++computerScore);
    }
    else if((playerChoice=="rock"&& computerChoice=="scissors")||
            (playerChoice=="paper"&& computerChoice=="rock")   ||
            (playerChoice=="scissor"&& computerChoice=="paper")){
            console.log("Round Won!",(playerChoice),"beats",(computerChoice));
            document.getElementById('playerScore').innerHTML = 'Score : '+(++playerScore);
    }
    else{
        console.log("Round Lost :(",(computerChoice),"beats",(playerChoice));
        document.getElementById('computerScore').innerHTML = 'Score : '+(++computerScore);
    }
    console.log("SCORE - Player :",(playerScore),"| Computer ",(computerScore));
    if(computerScore==5 || playerScore==5){
        document.getElementById('game').style.display = "none"
        if(computerScore==playerScore)
            document.getElementById('gameTied').style.display = "inline"
        else if(computerScore>playerScore)
            document.getElementById('computerWin').style.display = "inline"
        else
            document.getElementById('playerWin').style.display = "inline"
    }
}

let start = document.getElementById('start')
let startBtn = document.querySelector('#startBtn')

startBtn.addEventListener('click',function(){
    start.style.display = "none"
});
document.addEventListener('click',gameChoiceListener)
function gameChoiceListener(event){
    let choice = event.target;
    console.log(choice);
         if((choice.classList.contains('gameChoice') || 
             choice.classList.contains('rockTxt') ||
             choice.classList.contains('rockImg'))&& 
             choice.id === ('rock'))
             playRound("rock");
    else if((choice.classList.contains('gameChoice') || 
             choice.classList.contains('paperTxt') ||
             choice.classList.contains('paperImg'))&& 
             choice.id === ('paper'))
             playRound("paper");
    else if((choice.classList.contains('gameChoice') || 
             choice.classList.contains('scissorTxt') ||
             choice.classList.contains('scissorImg'))&& 
             choice.id === ('scissor'))
             playRound("scissor");
}
