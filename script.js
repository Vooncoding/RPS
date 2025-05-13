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

let player = prompt("Rock paper or scissors?" ).toLowerCase();



let comp = "";

let userScore = 0;
let computerScore = 0;

function computerChoice() {
    // slumpa ut ett tal mellan 1 och 4 
    // sätt värden till alla talen t.ex 1 == "sten" etc 

}


function userChoice() {
    // 


    if (player === "rock") {
        console.log("player choose rock");
    } else if(player === "scissors") {
        console.log("player choose scissors");
    } else if (player === "paper") {
        console.log("player choose paper");
    } else {
        console.log("invalid input");
    };
};

function playRound(userChoice, computerChoice) {

    // skriv ut vinnaren och förloraren 

    // plusa på score till vinnaren 


}

function playGame() {
    playRound(userChoice, computerChoice);
    playRound(userChoice, computerChoice);
    playRound(userChoice, computerChoice);
    playRound(userChoice, computerChoice);
    playRound(userChoice, computerChoice);
};



