// Card Variables
let sum = 0;
let cards = [];

// Booleans
let hasBlackJack = false;
let isAlive = false;

//String variables
let message = "";

// objects
let player = {
  name: "Dan Savage",
  chips: 150,
};

// Grab Elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Start Game
function startGame() {
  isAlive = true;
  playerEl.innerText = player.name + " - Chips: $" + player.chips;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// Generate Random Cards
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    console.log("Ace Hit");
    return 1;
  } else if (randomCard > 10) {
    console.log("King, Queen, Jack Hit");
    return 10;
  } else {
    console.log("Numbers 2-10");
    return randomCard;
  }
}

// Update Game Context
function renderGame() {
  // Create a for loop that renders out all the cards instead of just two
  if (sum <= 20) {
    message = "Do you want to draw a new card?🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}

// Cash out
console.log("BlackJack Status", hasBlackJack);

//Player out
console.log("Player Status", isAlive);

// New Card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  } else {
    alert("Sorry! Player is out of the game, please restart!");
  }
}
