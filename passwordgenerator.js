
// Assignment code here
var userinput;
var userCharacter;
var userNumber;
var userUppercase;
var userLowercase;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var character = ["!@#$$%^&*"]

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var button = document.createElement("button");

button.textContent = "Generate Password";

button.addEventListener("click", function() {
  
var password = generatePassword(8);
console.log(password);

});

document.body.appendChild(button);