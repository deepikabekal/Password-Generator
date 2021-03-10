// Assignment code here

//variable to hold length of the password
var passwordLength = 0;
var confirmLowerCase = false;
var confirmNumeric = false;
var confirmSpecial = false;
var confirmUpperCase = false;

function generatePassword () {
  //Welcome message
  alert("Let's get you a new password!");
  //Password length
  //prompt to select a length between 8 and 128
  passLength = prompt("How long do you want your password to be? Choose any length between 8 and 128");
  //checks if the entry is less than 8 or more than 128. 
  //If true then sends an alert and asks the user to enter data again
  //If false then does not enter the loop
  while (passwordLength < 8 || passwordLength > 128){
    alert("Not a valid entry. Try again!");
    passwordLength = prompt("How long do you want your password to be? Choose any length between 8 and 128");
    
  };
  console.log(passwordLength);

  //User choices - lowercase, uppercase, numeric and special character
  userChoice();
  //check whether the user has chosen atleast 1 character type
  //if not selected then enter the loop and ask to choose again
  while (!confirmLowerCase && !confirmNumeric && !confirmSpecial && !confirmUpperCase){
    alert("Invalid choice. You have to choose atleast 1 option. Try again!");
    userChoice();
  }

  //when the user chooses the character type then all the possibilities will be added to charOptions variable
  
  //user chooses lowercase
  if (confirmLowerCase){
    charOptions += passwordObj.lowerCase;
    console.log(charOptions);
  }
  //user chooses numeric
  if (confirmNumeric){
    charOptions += passwordObj.numericChar;
    console.log(charOptions);
  }

  //user chooses upper case
  if (confirmUpperCase){
    charOptions += passwordObj.upperCase;
    console.log(charOptions);
  }

  //user chooses special characters
  if (confirmSpecial){
    charOptions += passwordObj.specialChar;
    console.log(charOptions);

  }
}

generatePassword();

//function for user confirmation on different character sets
  
function userChoice() {
  confirmLowerCase = confirm("Do you want Lower case letters?");
  confirmUpperCase = confirm("Do you want Upper case letters?");
  confirmNumeric = confirm("Do you want numbers?");
  confirmSpecial = confirm("Do you want special characters?");
}


//Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

//Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());
