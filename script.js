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

  var passChar = prompt("Choose which character types should be include (must choose one): ")



  // console.log(passLength);
  // console.log(passChar);
  passwordText.value = password;

}


// Criteria
  // Length (8 - 128 chars)

  // todo char type (lower, upper, #, and/or special)

  // todo input validation (ensure at least one char type selected)

  // todo generate password with criteria



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
