function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice==0)
        return "rock";
    else if (choice==1)     
        return "paper";
    else                    
        return "scissors";
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for(let i=0;i<5;i++){
        playerChoice = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        if (playerChoice==computerChoice){
            console.log("Tied! Both chose",(playerChoice),"!");
            playerScore += 1;
            computerScore += 1;
        }
        else if((playerChoice=="rock"&&computerChoice=="scissors")||
                (playerChoice=="paper"&&computerChoice=="rock")   ||
                (playerChoice=="scissor"&&computerChoice=="paper")){
                console.log("Round Won!",(playerChoice),"beats",(computerChoice));
                playerScore += 1;
        }
        else{
            console.log("Round Lost :(",(computerChoice),"beats",(playerChoice));
            computerScore += 1;
        }
        console.log("SCORE - Player :",(playerScore),"| Computer ",(computerScore));
    }
    if(computerScore==playerScore)
        console.log("Game TIED");
    else if(computerScore>playerScore)
        console.log("You Lost, Try Again!");
    else
        console.log("You WIN!");
}

game();