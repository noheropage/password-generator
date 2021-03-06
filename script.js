// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var passLength = parseInt(prompt("Enter the desired password length (between 8-128 characters: "));

    // reject password lengths that are too short or too long or not a number 
    while (passLength < 8 || passLength > 128 || Number.isInteger(passLength) == false) {
      passLength = parseInt(prompt("Choose a password length between 8 and 128 characters: "))
    }

    // continue to ask user to choose character types until valid input is received 
    do {
      var passChar = prompt("Pick one or more of the following character types to include in the password (lowercase, uppercase, numeric, and/or special): ")
      // turns user input into an array of lowercase strings
      var passOptions = passChar.toLowerCase().split(" ");
    }
    // searches array for valid input 
    while (passOptions.includes("lowercase") === false && passOptions.includes("uppercase") === false && passOptions.includes("numeric") === false && passOptions.includes("special") === false);      // passChar = prompt("Please select at least one (lowercase, uppercase, numeric, special): ")

    // strings of possible characters for a password 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = lowerCase.toUpperCase()
    var numbers = "0123456789"
    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    // holds all possible characters 
    var superPassword = "";
    // holds characters of the generated password to be chosen at random 
    var realPassword = "";

    // takes user character selection and adds related characters to a master string 
    for (i = 0; i < passOptions.length; i++) {
      if (passOptions[i] === "lowercase") {
        superPassword += lowerCase;
      } else if (passOptions[i] === "uppercase") {
        superPassword += upperCase;
      } else if (passOptions[i] === "numeric") {
        superPassword += numbers;
      } else if (passOptions[i] === "special") {
        superPassword += specialChar;
      }
    }

    // chooses a random character from a master list of possible password characters for each character in the final password 
    for (var i = 0; i < passLength; i++) {
      realPassword += superPassword.charAt(Math.floor(Math.random() * superPassword.length));
    }
    return realPassword;
  };
  // updates textbox with the new password 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
