// returns computer random selction of Rock, Paper, Scissors
function computerPlay(){
  array = ["r","p","s"];
  return array[Math.floor(Math.random() * array.length)];
}


// Make Program to play 1 round of Rock, Paper, Scissor
// computerSelection as input
// Player input should be case-Insensative

function playRound (computerSelection, playerSel){
  switch (playerSel+computerSelection){
    case "rp":
      return "Computer Wins! Paper Beats Rock!";
      break;
    case "ps":
      return "Computer Wins! Scissors Beats Paper!";
      break;
    case "sr":
      return "Computer Wins! Rock Beats Scissors!";
      break;
    case "rs":
      return "Player Wins! Rock Beats Scissors!";
      break;
    case "sp":
      return "Player Wins! Scissors Beats Paper!";
      break;
    case "pr":
      return "Player Wins! Paper Beats Rock!";
      break;
    case "rr":
      return "Its a Tie!!";
      break;
    case "ss":
      return "Its a Tie!!";
      break;
    case "pp":
      return "Its a Tie!!";
      break;
    default:
      return "";
  }
}

// Play a certain number of rounds
function game(rounds){
  let count = 0
  while (count < rounds){
    outcome = playRound(computerPlay());
    console.log(outcome);
    console.log(sCore(outcome));
    count+=1;
  }
  return `Rounds Played ${count}`;
}

// For keeping track of score
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

// Function for Score tracking
// Reports score to Board
function sCore(result){
  if (result.toLowerCase().charAt() == "c"){
    computerScore +=1;
    return document.getElementById("computerscore").innerHTML = computerScore;
  }
  else if (result.toLowerCase().charAt() == "p"){
    playerScore +=1;
    return document.getElementById("playerscore").innerHTML = playerScore;
  }
  else {
    tieScore +=1;
     return `Computer Score: ${computerScore}. Player Score: ${playerScore}. Ties: ${tieScore}`;
  }

}
// Use game(rounds) to play the game replace rounds with a number of games to play

//Function that adds css class to clicked image

function log(x){
  if (x == "r"){
    return console.log("You Clicked Rock");
  }else if (x == "p"){
    return console.log("You Clicked Paper");
  }else{
    return console.log("You Clicked Scissors");
  }
}

//function to change element to string input

function wordchange(x){
  return document.getElementById("words").innerHTML = x;
}

//Function to Display if game is won and Reset
function winner(x){
  if (computerScore == 5){
    return wordchange("Computer Wins Game!")
  }else if (playerScore == 5){
    return wordchange("Player Wins Game!")
  }else{
    return wordchange(x)
  }
}

// Makes Images clickable and runs game
let rck = document.getElementById("prock");
let pper = document.getElementById("ppaper");
let sissor = document.getElementById("pscissors");

rck.onclick = function(){
  let outcome = playRound(computerPlay(), "r");
  sCore(outcome);
  winner(outcome);
}

pper.onclick = function(){
  let outcome = playRound(computerPlay(), "p");
  sCore(outcome);
  winner(outcome);
}

sissor.onclick = function(){
  let outcome = playRound(computerPlay(), "s");
  sCore(outcome);
  winner(outcome);
}

