/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* TO DO LIST
function to convert number 
expand function to multiple types
round to 3 decimal places
grab user input for function to convert
make conversions display in HTML locations
*/

// Grab Elements
const convert = document.getElementById("convertButton");
const inputElement = document.getElementById("userInput");
const metersDisplay = document.getElementById("metersInput");

// Variables

// Event Listeners
convert.addEventListener("click", convertFunction);

function lengthConversion() {
  let meter = inputElement.value * 3.281;
  let feet = inputElement.value / 3.281;
  let roundedMeter = Math.round(meter * 100) / 100;
  let roundedFeet = Math.round(feet * 100) / 100;
  metersDisplay.innerHTML =
    inputElement.value +
    " meters = " +
    roundedMeter +
    " feet | " +
    inputElement.value +
    " feet = " +
    roundedFeet +
    " meters";
  console.log(roundedMeter, "Feet");
  console.log(roundedFeet, "Meter");
}

function volumeConversion() {
  let liter = inputElement.value * 0.264;
  console.log(liter);
}

function massConversion() {
  let kilo = inputElement.value * 2.205;
  console.log(kilo);
}

function convertFunction() {
  if (inputElement.value > 0) {
    lengthConversion(), volumeConversion(), massConversion();
  } else {
    console.log("no user input available", inputElement.value);
  }
}
