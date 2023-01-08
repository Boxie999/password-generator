// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Function to prompt user for password options
function getPasswordOptions() {
var passwordChoice =  {
  length : 0,
  lowercase : false,
  uppercase : false,
  numbers : false,
  special : false,
}
  var validNumber = false
  while (validNumber === false) {
    var numberChoice = prompt("Enter a number between 10 and 64")
    if (numberChoice > 64 || numberChoice < 10) {
      alert("the number is not between 10 and 64")
    }
    else {
      validNumber = true
      passwordChoice.length = numberChoice
    }
  }
console.log("the loop has finished!!!")
var lowercaseChoice = confirm("Would you like to include lowercase letters in your password?")
console.log(lowercaseChoice)
passwordChoice.lowercase = lowercaseChoice


var uppercaseChoice = confirm('Would you like to include uppercase characters in your password?');
console.log(uppercaseChoice);
passwordChoice.uppercase = uppercaseChoice;

var numbercharacterChoice = confirm('Would you like to include numeric characters in your password?');
console.log(numbercharacterChoice);
passwordChoice.numbers = numbercharacterChoice;

var specialCharacterChoice = confirm('Would you like to include special characters in your password?');
console.log(specialCharacterChoice);
passwordChoice.special = specialCharacterChoice;

return passwordChoice;
}


// Function for getting a random element from an array
function getRandom(arr) {
}
// Function to generate password with user input
function generatePassword() {
  var passwordChoice = getPasswordOptions()
  console.log(passwordChoice)
  return "I'm generating a password"
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);