// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passLength = parseInt(prompt("Enter the desired password length (between 8-128 characters: "));

  // verify valid password length input 
  while (passLength < 8 || passLength > 128 || Number.isInteger(passLength) == false) {
    passLength = parseInt(prompt("Choose a password length between 8 and 128 characters: "))
  }

  var passChar = prompt("Pick one or more of the following character types to include in the password (lowercase, uppercase, numeric, and/or special characters): ")
  var passOptions = passChar.split(" ");
  var optionLength = passOptions.length;
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = lowerCase.toUpperCase()
  var numbers = "0123456789"
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  var superPassword = "";
  var realPassword = "";

  for (i = 0; i < optionLength; i++) {
    if (passOptions[i] === "lowercase") {
      superPassword += lowerCase;
    } else if (passOptions[i] === "uppercase") {
      superPassword += upperCase;
    } else if (passOptions[i] === "numeric") {
      superPassword += numbers;
    } else if (passOptions[i] === "special") {
      superPassword += specialChar;
    } else {
      passChar = prompt("Please select at least one (lowercase, uppercase, numeric, special): ")
    }
  }


  for (var i=0, n=superPassword.length; i<passLength; i++) {
    realPassword += superPassword.charAt(Math.floor(Math.random() * n));
  }

  // verify valid character input 
  console.log(passOptions);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChar);
  console.log(superPassword);
  console.log(realPassword);


  passwordText.value = password;

}


// Criteria
// Length (8 - 128 chars)

// char type (lower, upper, #, and/or special)

// todo input validation (ensure at least one char type selected)

// todo generate password with criteria



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
