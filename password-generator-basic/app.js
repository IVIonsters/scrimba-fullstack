// prettier-ignore
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Variables
let result = "";

//Elements
let passwordOne = document.getElementById("display-one");
let passwordTwo = document.getElementById("display-two");

//Generate Password
function generatePassword() {
  let result = "";
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  console.log("Password Generated");
  return result;
}

// Display Passwords
function displayPasswords() {
  let firstPassword = generatePassword();
  let secondPassword = generatePassword();

  //HTMl / DOM Changes
  passwordOne.textContent = firstPassword;
  passwordTwo.textContent = secondPassword;
}
