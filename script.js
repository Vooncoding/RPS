// skapa en funktion för datorval 
// datorval ska slumpa ut ett val sten, sax eller påse 
// använd math.random 
// skapa en funktion för användarval 
// ta input och skriv logiken baserat på input 
// skapa variabler för att hålla score på användare och dator 
// sätt båda till 0
// skapa en funktion som heter playRound 
// ta två parametrar, användarval och dator 
// gör användarval till case sensitivce ( stora bokstäver eller små) 
// playround ska skriva ut vinnaren och förloraren 
// plusa på score baserat på vem som van 

// skapa en funktion som heter playGame som kallar på playRound 
// den ska spelas 5 rundor, så kalla på playRound 5 gånger 

// 

let player = "";// skapa spelarens input 




let userScore = 0;
let computerScore = 0;
let computer = "";
function computerChoice() {

    let RndNum = Math.floor(Math.random() * 4);
    
    switch(RndNum) {
        case 0:
            computer = "rock";
            console.log("computer choose rock");
            break;
        case 1: 
        console.log("computer choose scissors");
        break;
        case 2: 
        console.log("computer choose paper");
        break;
    };

    // slumpa ut ett tal mellan 1 och 4 CHECK 
    // sätt värden till alla talen t.ex 1 == "sten" etc 
    // skriv ut datorns val i konsolen 
};

function userChoice() {
    


    switch(player) {
        case "rock": 
            console.log("player choose rock");
        break;
        case "scissors":
            console.log("player choose scissors");
            break;
        case "paper":
            console.log("player choose paper");
            break;
        default: 
        console.log("invalid input");
    }; 
};



function playRound(playerc, computerc) {


    if (playerc === "rock" && computerc === "rock") {
        console.log("its a draw!");
        console.log(`score is computer: ${computerScore} and user: ${userScore} }`);
    }
    else if( playerc === "rock" && computerc === "paper") {
        console.log("Computer wins this round! ");
        computerScore++;
        console.log(`score is computer: ${computerScore} and user: ${userScore} }`);
    } else if(playerc === "rock" && computerc === "scissors") {
        console.log("player winns this round! ");
        console.log(`score is computer: ${computerScore} and user: ${userScore} }`);
    }
 

};

playRound(player, computer); 

function playGame() {
player = prompt("Rock paper or scissors?" ).toLowerCase(); 
    computerChoice();
    userChoice();
    playRound(player, computer);
player = prompt("Rock paper or scissors?" ).toLowerCase(); 
    computerChoice();
    userChoice();
    playRound(player, computer);
player = prompt("Rock paper or scissors?" ).toLowerCase(); 
    computerChoice();
    userChoice();
    playRound(player, computer);
player = prompt("Rock paper or scissors?" ).toLowerCase(); 
    computerChoice();
    userChoice();
    playRound(player, computer);
player = prompt("Rock paper or scissors?" ).toLowerCase(); 
    computerChoice();
    userChoice();
    playRound(player, computer);
    

  
};

playGame();



