// Score variables and elements
let homeScore = 0;
let guestScore = 0;
let updateHomeScore = document.getElementById("homeScore");
let updateGuestScore = document.getElementById("guestScore");

// Refactored Code
function incrementScore(team, points) {
  if (team === "home") {
    homeScore += points;
    updateHomeScore.innerText = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    updateGuestScore.innerText = guestScore;
  }
  whoIsWinning();
}

// Home score increment shortcuts
function incrementOneHome() {
  incrementScore("home", 1);
}

function incrementTwoHome() {
  incrementScore("home", 2);
}

function incrementThreeHome() {
  incrementScore("home", 3);
}

// Guest score increment shortcuts
function incrementOneGuest() {
  incrementScore("guest", 1);
}

function incrementTwoGuest() {
  incrementScore("guest", 2);
}

function incrementThreeGuest() {
  incrementScore("guest", 3);
}

// Reset All Scores
function resetScores() {
  updateGuestScore.innerText = 0;
  updateHomeScore.innerText = 0;
  homeScore = 0;
  guestScore = 0;
  updateGuestScore.classList.remove("leader", "tieGame");
  updateHomeScore.classList.remove("leader", "tieGame");
}

// Highlight Leader
function whoIsWinning() {
  // Clear all classes first
  updateGuestScore.classList.remove("leader", "tieGame");
  updateHomeScore.classList.remove("leader", "tieGame");

  // Apply appropriate classes based on score
  if (guestScore === homeScore) {
    updateGuestScore.classList.add("tieGame");
    updateHomeScore.classList.add("tieGame");
  } else if (homeScore > guestScore) {
    updateHomeScore.classList.add("leader");
  } else {
    updateGuestScore.classList.add("leader");
  }
}

// Original Code -----------------------

//Increase homeScore functions
// function incrementOneHome() {
//   homeScore += 1;
//   console.log(homeScore);
//   updateHomeScore.innerText = homeScore;
//   whoIsWinning();
// }

// function incrementTwoHome() {
//   homeScore += 2;
//   console.log(homeScore);
//   updateHomeScore.innerText = homeScore;
//   whoIsWinning();
// }

// function incrementThreeHome() {
//   homeScore += 3;
//   console.log(homeScore);
//   updateHomeScore.innerText = homeScore;
//   whoIsWinning();
// }

// // Increase guestScore Functions
// function incrementOneGuest() {
//   guestScore += 1;
//   console.log(guestScore);
//   updateGuestScore.innerText = guestScore;
//   whoIsWinning();
// }

// function incrementTwoGuest() {
//   guestScore += 2;
//   console.log(guestScore);
//   updateGuestScore.innerText = guestScore;
//   whoIsWinning();
// }

// function incrementThreeGuest() {
//   guestScore += 3;
//   console.log(guestScore);
//   updateGuestScore.innerText = guestScore;
//   whoIsWinning();
// }

// // Reset All Scores
// function resetScores() {
//   updateGuestScore.innerText = 0;
//   updateHomeScore.innerText = 0;
//   homeScore = 0;
//   guestScore = 0;
//   updateGuestScore.classList.remove("leader");
//   updateHomeScore.classList.remove("leader");
// }

// Highlight Leader
// function whoIsWinning() {
//   if (guestScore === homeScore) {
//     updateGuestScore.classList.add("tieGame");
//     updateHomeScore.classList.add("tieGame");
//   }
//   if (homeScore > guestScore) {
//     updateHomeScore.classList.add("leader");
//     updateGuestScore.classList.remove("leader");
//     updateGuestScore.classList.remove("tieGame");
//     updateHomeScore.classList.remove("tieGame");
//   }
//   if (guestScore > homeScore) {
//     updateGuestScore.classList.add("leader");
//     updateHomeScore.classList.remove("leader");
//     updateGuestScore.classList.remove("tieGame");
//     updateHomeScore.classList.remove("tieGame");
//   }
// }
