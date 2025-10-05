// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

function ageCheck() {
  if (age < 21) {
    console.log("You shall not pass");
  } else {
    console.log("welcome to the party");
  }
}

ageCheck();

// ----------------------------------------------
console.log("-------------------------------------");

let ageKing = 100;

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"

// with this logic only people who are exactly 100 years old can get a birthday card from the king.

function birthdayCard() {
  if (ageKing < 100) {
    console.log("Not eligible");
  } else if (ageKing === 100) {
    console.log("Here is your birthday card from the king!");
  } else {
    console.log("Not eligible, you have already gotten one");
  }
}

birthdayCard();
