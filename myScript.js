// returns computer random selction of Rock, Paper, Scissors
function computerPlay(){
  array = ["r","p","s"];
  return array[Math.floor(Math.random() * array.length)];
}


// Make Program to play 1 round of Rock, Paper, Scissor
// computerSelection as input
// Player input should be case-Insensative

function playRound (computerSelection){
  playerSelection = prompt("Enter Rock, Paper, or Scissors")
  playerSel = playerSelection.charAt().toLowerCase()
  switch (playerSel+computerSelection){
    case "rp":
      return "Computer Wins! Paper Beats Rock!"
      break
    case "ps":
      return "Computer Wins! Scissors Beats Paper!"
      break
    case "sr":
      return "Computer Wins! Rock Beats Scissors!"
      break
    case "rs":
      return "Player Wins! Rock Beats Scissors!"
      break  
    case "sp":
      return "Player Wins! Scissors Beats Paper!"
      break 
    case "pr":
      return "Player Wins! Paper Beats Rock!"
      break 
    case "rr":
      return "Its a Tie!!"
      break  
    case "ss":
      return "Its a Tie!!"
      break 
    case "pp":
      return "Its a Tie!!"
      break 
    default:
      return ""
  }
    
}

// Play a certain number of rounds
function game(rounds){
  let count = 0
  while (count < rounds){
    outcome = playRound(computerPlay())
    console.log(outcome);
    console.log(sCore(outcome))
    count+=1;
  }
  return `Rounds Played ${count}`
}

// For keeping track of score
let computerScore = 0
let playerScore = 0
let tieScore = 0
// Function for Score tracking
function sCore(result){
  if (result.toLowerCase().charAt() == "c"){
    computerScore +=1;
    return `Computer Score: ${computerScore}. Player Score: ${playerScore}. Ties: ${tieScore}`;
  }
  else if (result.toLowerCase().charAt() == "p"){
    playerScore +=1;
     return `Computer Score: ${computerScore}. Player Score: ${playerScore}. Ties: ${tieScore}`;
  }
  else {
    tieScore +=1;
     return `Computer Score: ${computerScore}. Player Score: ${playerScore}. Ties: ${tieScore}`;
  }

}
// Use game(rounds) to play the game replace rounds with a number of games to play