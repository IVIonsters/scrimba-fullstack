// Card Variables
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;

// Booleans
let hasBlackJack = false;
let isAlive = true;

//String variables
let message = "";

function cardSum() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  //log player choice - cardSum()
  console.log(message);
}
cardSum();

// Cash out
console.log("BlackJack Status", hasBlackJack);

//Player out
console.log("Player Status", isAlive);
