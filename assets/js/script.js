/*
prompt user for their move

randomly pick computers move; - 0-2

find winner

update stats

prompt user if they want to play again




global variables:
    wins, losses, totalgames, ties

functions:
    -main game function
        -prompt users for input
        -get computer move
        -check winner (display computer move)
            - R > S
            - S > P
            - P > R

        -update stats/display stats
    
    - play again?




*/

var wins = 0,
  losses = 0,
  totalGames = 0,
  ties = 0,
play = true;  

if (window.confirm("Want Too Play Rock, Paper, Scissors?")) {
  while(play){
    playGame();
    play = playAgain();
  }
} else {
  window.alert("Scared?");
}

function userInput() {
  var userMove = window.prompt("R, P, or S?");
  console.log(userMove);
  if (userMove != "R" && userMove != "P" && userMove != "S") {
    window.alert("Invalid Move, Choose again");
    return userInput();
  } else {
    return userMove;
  }
}

function getComputerMove(userMove) {
  var moves = ["R", "P", "S"];
  var computerMove = moves[Math.random(2)];


  if (userMove == "R") {
    if (computerMove == "R") {
      window.alert("Computer Chose Rock, Tie");
      ties++;
    } else if (computerMove == "S") {
      window.alert("Computer Chose Scissors, You Win!");
      wins++;
    } else {
      window.alert("Computer Chose Paper, You Loose!");
      losses++;
    }
  } else if (userMove == "P") {
    if (computerMove == "R") {
      window.alert("Computer Chose Rock, You Win!");
      wins++;
    } else if (computerMove == "S") {
      window.alert("Computer Chose Scissors, You Loose!");
      losses++;
    } else {
      window.alert("Computer Chose Paper, Tie!");
      ties++;
    }
  } else { //User chose scissors
    if (computerMove == "R") {
        window.alert("Computer Chose Rock, You Loose!");
        losses++;
      } else if (computerMove == "S") {
        window.alert("Computer Chose Scissors, Tie!");
        ties++;
      } else {
        window.alert("Computer Chose Paper, You Win!");
        wins++;
      }
  }
  
}

function displayStats(){
    window.alert("Wins: " + wins + "\nLosses: "+ losses +"\nTies: " + ties);
}
function playAgain(){
    return window.confirm("Want To Play Again?");
}
function playGame() {
  //prompt users for input
  var userMove = userInput();
  //get computer move
      //check winner (display computer move)
    getComputerMove(userMove);

  //update stats/display stats
  displayStats();


}
