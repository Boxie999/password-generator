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

var combinedArray = []; // I will store the selected arrays in this empty array, based on the users choice
var numberChoice; //I will store the selected length of the password in this variable

  

// Function to prompt user for password options

// In this passwordChoice object I can store all the values from the users input
function getPasswordOptions() {
var passwordChoice =  {
  length : 0,
  lowercase : false,
  uppercase : false,
  numbers : false,
  special : false,
}
  var validNumber = false
  // This while loop will run until the user types a number between 10 and 64 (until it remains false)
  // When the user types a number between 10 and 64, I assign the validNumber a value of true, which means it is not false anymore, so it breaks the while loop
  while (validNumber === false) {
     numberChoice = prompt("Enter a number between 10 and 64")
    if (numberChoice > 64 || numberChoice < 10) {
      alert("the number is not between 10 and 64")
    }
    else {
      validNumber = true
      passwordChoice.length = numberChoice
    }
  }
console.log("the loop has finished!!!") //when we get the right number, we can move on to the next questions
// when we get an answer from the user, the next confirm message will show up
var lowercaseChoice = confirm("Would you like to include lowercase letters in your password?")
console.log(lowercaseChoice)
passwordChoice.lowercase = lowercaseChoice // we store the user input in the passwordChoice object, and reassign the value of the variables based on the input
if (lowercaseChoice === true) {
  combinedArray.push(...lowerCasedCharacters); // if they would like to include lowercase characters, I will push this array to the combined array
}

var uppercaseChoice = confirm('Would you like to include uppercase characters in your password?');
console.log(uppercaseChoice);
passwordChoice.uppercase = uppercaseChoice;
if ( uppercaseChoice === true) {
  combinedArray.push(...upperCasedCharacters);
} //if they would like to include uppercase letters, i will push the uppercase array in the combined array

var numbercharacterChoice = confirm('Would you like to include numeric characters in your password?');
console.log(numbercharacterChoice);
passwordChoice.numbers = numbercharacterChoice;
if ( numbercharacterChoice === true) {
  combinedArray.push(...numericCharacters);
} //if they would like to include numbers, i will push the numbers array in the combined array

var specialCharacterChoice = confirm('Would you like to include special characters in your password?');
console.log(specialCharacterChoice);
passwordChoice.special = specialCharacterChoice;
if (specialCharacterChoice === true) {
  combinedArray.push(...specialCharacters);
} //if they would like to include special characters, i will push the special characters array in the combined one
console.log('Combined array = ', combinedArray)
//I repeat this with all the questions, and I store the answers in the objects variables, reassigning the values with the user input
return passwordChoice;
}


// Function for getting a random element from an array

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomItem = arr[randomIndex];
  console.log(randomItem) 
  return randomItem;
// I can use this function to get a random element from an array, I just need to put the arrays name as parameter to the function
    

}
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  
  var finalPassword = "" // i created an empty variable so I can store the final password here
 
  for ( var i = 0; i < numberChoice; i++) {
    var randomResult = getRandom(combinedArray)
    finalPassword += randomResult
  } // this for loop will iterate through the combined array and get random characters from it, based on the user input
  
  
  return finalPassword //this will show the user their final password
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
