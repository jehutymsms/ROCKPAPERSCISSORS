//
// vairiables for computer Images 
let cck = document.getElementById("crock");
let cper = document.getElementById("cpaper");
let cissor = document.getElementById("cscissors");

// function to hightlight computer selection and deselect
// previous selection

function chighlight(x){
  let image = [cck, cper, cissor];
  for (i=0; i< image.length; i++ ) {
    image[i].classList.remove("cplayed");
  }
  if (x == "r"){
    return cck.classList.add("cplayed")
  }else if(x == "p"){
    return cper.classList.add("cplayed")
  }else{
    return cissor.classList.add("cplayed")
  }
}

// returns computer random selction of Rock, Paper, Scissors
function computerPlay(){
  array = ["r","p","s"];
  let answer = array[Math.floor(Math.random() * array.length)];
  chighlight(answer);
  return answer;
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

// vairiables for player Images 
let rck = document.getElementById("prock");
let pper = document.getElementById("ppaper");
let sissor = document.getElementById("pscissors");

// function to hightlight selection and remove hightlight from players
// previous selection
function phighlight(x){
  let image = [rck, pper, sissor];
  for (i=0; i< image.length; i++ ) {
    image[i].classList.remove("pplayed");
  }
  return x.classList.add("pplayed")
}

rck.onclick = function(){
  let outcome = playRound(computerPlay(), "r");
  phighlight(rck);
  sCore(outcome);
  winner(outcome);
}

pper.onclick = function(){
  let outcome = playRound(computerPlay(), "p");
  phighlight(pper);
  sCore(outcome);
  winner(outcome);
}

sissor.onclick = function(){
  let outcome = playRound(computerPlay(), "s");
  phighlight(sissor);
  sCore(outcome);
  winner(outcome);
}

//variable for reset button
let reset = document.getElementById("reset");

//Functions to reset game


reset.onclick = function(){
  scorereset()
  removeAllHightlight()
  wordReset()
}

// resets score
function scorereset(){
  computerScore = 0;
  playerScore = 0;
  document.getElementById("computerscore").innerHTML = computerScore;
  document.getElementById("playerscore").innerHTML = playerScore;
}

// // removes hightlights

function removeAllHightlight(){
    let image = [rck, pper, sissor, cck, cper, cissor];
    for (i=0; i< image.length; i++ ) {
      image[i].classList.remove("pplayed");
      image[i].classList.remove("cplayed");
    }
}


// // resets game words to previous

function wordReset(){
  document.getElementById("words").innerHTML = "Lets Play";
}