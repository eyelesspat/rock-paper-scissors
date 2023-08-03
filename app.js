//Rock paper scissors game
//
//
//generate a random number between 0,1,2 - assign rock paper and scissors to them
const choice = ["rock","paper","scissors"];
//compare both inputs
function game() {
  let playerScore = 0;
  let computerScore = 0;
//make the game run 5 times
  for (let round=0; round < 5; round++) {
    let getComputerChoice = Math.floor(Math.random() * choice.length);
  console.log("Choose between rock, paper or scissors.");
  //get player input
  let playerSelection = prompt()
  //makes player input case insensitive
  playerSelection = playerSelection.toLocaleLowerCase()
  //get computer choice (rock paper or scissors)
  let computerSelection = choice[getComputerChoice];
  switch (playerSelection) {
    case 'rock':
      if (computerSelection == `rock`) {
        console.log(`${playerSelection} and ${computerSelection}, it's a draw!`);
      }
      else if (computerSelection == `paper`) {
        console.log(`${playerSelection} and ${computerSelection}, computer wins!`);
        computerScore++;
      }
      else if (computerSelection == `scissors`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins!`);
        playerScore++;
      }
      break; 
    case 'paper':
      if (computerSelection == `rock`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins`);
        playerScore++;
      }
      else if (computerSelection == `paper`) {
        console.log(`${playerSelection} and ${computerSelection}, it's a draw!`);
      }
      else if (computerSelection == `scissors`) {
        console.log(`${playerSelection} and ${computerSelection}, computer wins!`);
        computerScore++;
      }
      break;
    case 'scissors':
      if (computerSelection == `rock`) {
        console.log(`${playerSelection} and ${computerSelection}, computer wins!`);
        computerScore++;
      }
      else if (computerSelection == `paper`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins!`);
        playerScore++;
      }
      else if (computerSelection == `scissors`) {
        console.log(`${playerSelection} and ${computerSelection}, it's a draw!`);
      }
      break;
    default:
      console.log(`Sorry, the ${playerSelection} was a wrong input. Try again`)
      break;
    }
  }
  if (playerScore > computerScore) {
    console.log(`Player: ${playerScore},\nComputer: ${computerScore}`)
    console.log("Player Wins!")
  }
  else if (computerScore > playerScore) {
    console.log(`Player: ${playerScore},\nComputer: ${computerScore}`)
    console.log("Computer Wins!")
  }
  else {
    console.log(`Player: ${playerScore},\nComputer: ${computerScore}`)
    console.log("It's a draw!")
  }
}
//display answer
//
//run game
game()
//
//
//
//
//
//
//
