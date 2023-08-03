//Rock paper scissors game
//
//
//generate a random number between 0,1,2 - assign rock paper and scissors to them
const choice = ["rock","paper","scissors"];
let getComputerChoice = Math.floor(Math.random() * choice.length);
//compare both inputs
function game() {
  console.log("Choose between rock, paper or scissors.")
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
      }
      else if (computerSelection == `scissors`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins!`);
      }
      break; 
    case 'paper':
      if (computerSelection == `rock`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins`);
      }
      else if (computerSelection == `paper`) {
        console.log(`${playerSelection} and ${computerSelection}, it's a draw!`);
      }
      else if (computerSelection == `scissors`) {
        console.log(`${playerSelection} and ${computerSelection}, computer wins!`);
      }
      break;
    case 'scissors':
      if (computerSelection == `rock`) {
        console.log(`${playerSelection} and ${computerSelection}, computer wins!`);
      }
      else if (computerSelection == `paper`) {
        console.log(`${playerSelection} and ${computerSelection}, player wins!`);
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
