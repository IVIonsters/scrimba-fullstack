/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Grab Elements
const convert = document.getElementById("convertButton");
const inputElement = document.getElementById("userInput");
const lengthDisplay = document.getElementById("lengthInput");
const volumeDisplay = document.getElementById("volumeInput");
const massDisplay = document.getElementById("massInput");

// Variables

// Event Listeners
convert.addEventListener("click", convertFunction);

// Function to convert Meters/Feet
function lengthConversion() {
  let meter = inputElement.value * 3.281;
  let feet = inputElement.value / 3.281;
  let roundedMeter = Math.round(meter * 100) / 100;
  let roundedFeet = Math.round(feet * 100) / 100;
  lengthDisplay.textContent =
    inputElement.value +
    " meters = " +
    roundedMeter +
    " feet | " +
    inputElement.value +
    " feet = " +
    roundedFeet +
    " meters";
  // console.log(roundedMeter, "Feet");
  // console.log(roundedFeet, "Meter");
}

// Function to convert Liters/Gallons
function volumeConversion() {
  let liter = inputElement.value * 0.264;
  let gallons = inputElement.value / 0.264;
  let roundedLiter = Math.round(liter * 100) / 100;
  let roundedGallons = Math.round(gallons * 100) / 100;
  volumeDisplay.textContent =
    inputElement.value +
    " liters = " +
    roundedLiter +
    " gallons | " +
    inputElement.value +
    " gallons = " +
    roundedGallons +
    " liters";
  // console.log(roundedLiter, "Gallons");
  // console.log(roundedGallons, "Liters");
}

// Function to convert Kilograms/Pounds
function massConversion() {
  let kilo = inputElement.value * 2.205;
  let pounds = inputElement.value / 2.205;
  let roundedKilo = Math.round(kilo * 100) / 100;
  let roundedPounds = Math.round(pounds * 100) / 100;
  massDisplay.textContent =
    inputElement.value +
    " kilos = " +
    roundedKilo +
    " pounds | " +
    inputElement.value +
    " pounds = " +
    roundedPounds +
    " kilos";
  // console.log(roundedKilo, "Pounds");
  // console.log(roundedPounds, "Kilograms");
}

function convertFunction() {
  if (inputElement.value > 0) {
    lengthConversion();
    volumeConversion();
    massConversion();
    inputElement.value = "";
  } else {
    console.log("no user input available", inputElement.value);
  }
}
