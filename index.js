const choices = ["rock👊", "paper🖐", "scissors✌"];
const playerDisplay = document.getElementById("playerDisplay");
const computeDisplay = document.getElementById("computeDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice){
    const computeChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computeChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerchoice){
            case "rock👊":
                result = (computeChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper🖐":
                result = (computeChoice === "rock") ? "YOU LOSE!" : "YOU WIN!";
                break;

            case "scissors✌":
                result = (computeChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerchoice}`;
    computeDisplay.textContent = `Computer: ${computeChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
            
        case "YOU LOSE!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
    }

}