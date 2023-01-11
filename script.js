var characterLength = 0;
var choiceArr = [];

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  characterLength = parseInt(
    prompt(
      `How many characters do you want your password to be? Should be between 10 - 64 characters`
    )
  );
  if (isNaN(characterLength) || characterLength < 10 || characterLength > 64) {
    // I just make sure that the user is writing the correct value
    alert(
      "Character length has to be a number, from 10 to 64 digits. Please try again"
    );
    return false;
  }
  if (confirm(`Would you like lowercased characters in your password?`)) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  if (confirm(`Would you like uppercased characters in your password?`)) {
    choiceArr = choiceArr.concat(upperCasedCharacters);
  }
  if (confirm(`Would you like numbers in your password?`)) {
    choiceArr = choiceArr.concat(numericCharacters);
  }
  if (confirm(`Would you like special characters in your password?`)) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  return true;
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr, random) {
  random = Math.floor(Math.random() * arr.length);
  console.log(arr[random]);
}
getRandom(specialCharacters);
getRandom(numericCharacters);
getRandom(lowerCasedCharacters);
getRandom(upperCasedCharacters);

// Function to generate password with user input
// will generate a PW based on the prompts
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomItem = Math.floor(Math.random() * choiceArr.length);
    password += choiceArr[randomItem];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions(); // either true or false
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    // if I write the correct prompts, only then I can generate the password
    var newPassword = generatePassword();

    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
