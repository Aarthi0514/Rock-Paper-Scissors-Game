const choices=["Rock","Paper","Scissors"];
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay")
const playerscoredisplay=document.getElementById("playerscoredisplay")
const computerscoredisplay=document.getElementById("computerscoredisplay")
let playerscore=0;
let computerscore=0;

function playgame(playerChoice){

    const computerChoice=choices[Math.floor(Math.random() *3)];
     let result="";

    if(playerChoice === computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result=(computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result=(computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result=(computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }  
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;


    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            resultDisplay.classList.remove("redText", "blueText");
            playerscore++;
            playerscoredisplay.textContent=playerscore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            resultDisplay.classList.remove("greenText", "blueText");
            computerscore++;
            computerscoredisplay.textContent=computerscore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("blueText");
            resultDisplay.classList.remove("redText", "greenText");
            break;
        default:
            resultDisplay.classList.remove("redText", "greenText", "blueText");
    }
    

}