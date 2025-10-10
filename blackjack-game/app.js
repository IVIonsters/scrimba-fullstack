// Card Variables
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];

// Booleans
let hasBlackJack = false;
let isAlive = true;

//String variables
let message = "";

// Grab Elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Start Game
function startGame() {
  renderGame();
}

// Update Game Context
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  sumEl.innerText = sum;
  messageEl.innerText = message;
  cardsEl.innerText = cards[0] + " - " + cards[1];
}

// Cash out
console.log("BlackJack Status", hasBlackJack);

//Player out
console.log("Player Status", isAlive);

// New Card
function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 4;
  sum = sum + card;
  renderGame();
}
