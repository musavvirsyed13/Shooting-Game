// Selecting Elements
const health0El = document.getElementById("health--0");
const health1El = document.getElementById("health--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const btnShoot = document.querySelector(".btn--shoot");
const btnReset = document.querySelector(".btn--reset");

// Starting Conditions
health0El.textContent = 100;
health1El.textContent = 100;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
//Variable to save Restricting Shoot Button after 5 Rounds are Completed
let roundCounter = 0;
// Variable to save Finding the Winner of individual rounds and incrementing their score by 1
let player0Score = 0;
let player1Score = 0;

// Shooting Functionality
btnShoot.addEventListener("click", function () {
  // 1. Getting Random Power for each player
  var currentScore0El = Math.trunc(Math.random() * 5);
  var currentScore1El = Math.trunc(Math.random() * 5);

  document.getElementById("current--0").textContent = currentScore0El;
  //   console.log(currentScore0El);
  document.getElementById("current--1").textContent = currentScore1El;
  //   console.log(currentScore1El);
  // 2. Calculating Players Health after hitting by power
  health0El.textContent = health0El.textContent - currentScore0El;
  //   console.log(health0El.textContent);
  health1El.textContent = health1El.textContent - currentScore1El;
  //   console.log(health1El.textContent);
  // 3. Counting Number of Rounds Left
  roundCounter++;
  //   console.log(roundCounter);
  // 4. Restricting Shoot Button after 5 Rounds are Completed
  if (roundCounter === 5) {
    gameOver();
  }
  // 5. Finding the Winner of individual rounds and incrementing their score by 1
  if (currentScore0El > currentScore1El) {
    player0Score = player0Score + 1;
  }

  if (currentScore1El > currentScore0El) {
    player1Score = player1Score + 1;
  }
  document.getElementById("player-win-score0").innerHTML = player0Score;
  document.getElementById("player-win-score1").innerHTML = player1Score;
  // 6.Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
  if (player0Score == 3) {
    gameOver("Player 1 Won!");
  }

  if (player1Score == 3) {
    gameOver("Player 2 Won!");
  }
  // 7. Checking which player has scored more after completing 5 rounds
  if (roundCounter == 5) {
    if (player0Score > player1Score) {
      gameOver("Player 1 Won!");
    }

    if (player1Score > player0Score) {
      gameOver("Player 2 Won!");
    }

    // 8. Checking if both the players have scored equaly, if yes then printing DRAW
    if (player1Score == player0Score) {
      gameOver("Match Draw");
    }
  }
});

function gameOver(playercomment) {
  document.getElementById("final-result-item").innerHTML = playercomment;
  document.querySelector(".btn--shoot").disabled = true;
  document.querySelector(".btn--shoot").innerHTML = "Game Over";
  document.querySelector(".btn--shoot").style.backgroundColor = "grey";
}

// Reset Button
btnReset.addEventListener("click", function () {
  location.reload();
});
