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

// Variables

// Event Listeners
convert.addEventListener("click", convertFunction);

function meterConversion() {
  let meter = inputElement.value * 3.281;
  console.log(meter);
}

function literConversion() {
  let liter = inputElement.value * 0.264;
  console.log(liter);
}

function kilogramConversion() {
  let kilo = inputElement.value * 2.205;
  console.log(kilo);
}

function convertFunction() {
  meterConversion(), literConversion(), kilogramConversion();
}
