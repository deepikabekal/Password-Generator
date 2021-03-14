// Assignment code here
//object for password peoperties
var passwordObj = {
  passLength : 0,
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar : "!@#$%^&*()+={}<>?/",
  numericChar : "0123456789"
};


//variables for user confirmation
var confirmLowerCase = false;
var confirmNumeric = false;
var confirmSpecial = false;
var confirmUpperCase = false;




//funtion declaration

function generatePassword() {
  //variables for final password and to hold a string of characters for random selection
  var characterOptions = "";
  var finalPassword = "";
  var characterChoices = [];
  
  //Welcome message
  alert("Let's get you a new password!");

  passwordObj.passLength =  passwordLength();


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
    characterOptions += passwordObj.lowerCase;
    characterChoices.push("lowerCase");
    console.log(characterOptions);
    console.log(characterChoices);
  }
  //user chooses numeric
  if (confirmNumeric){
    characterOptions += passwordObj.numericChar;
    characterChoices.push("numericChar");
    console.log(characterOptions);
    console.log(characterChoices);

  }

  //user chooses upper case
  if (confirmUpperCase){
    characterOptions += passwordObj.upperCase;
    characterChoices.push("upperCase");
    console.log(characterOptions);
    console.log(characterChoices);

  }

  //user chooses special characters
  if (confirmSpecial){
    characterOptions += passwordObj.specialChar;
    characterChoices.push("specialChar");
    console.log(characterOptions);
    console.log(characterChoices);


  }

  finalPassword = randomPassword(characterOptions);
  console.log(finalPassword);
  finalPassword = verifyPassword(finalPassword,characterChoices);
  console.log(finalPassword);
  
  return finalPassword;
  
 //console.log(finalPassword);
}

//generatePassword();

//function for user confirmation on different character sets
  
function userChoice() {
  confirmLowerCase = confirm("Do you want Lower case letters?");
  confirmUpperCase = confirm("Do you want Upper case letters?");
  confirmNumeric = confirm("Do you want numbers?");
  confirmSpecial = confirm("Do you want special characters?");
}

//function for the length of the password
function passwordLength(){
  //Password length
  //prompt to select a length between 8 and 128
  var checkLength = parseInt(prompt("How long do you want your password to be? Choose any length between 8 and 128"));
  //console.log(typeof(passwordObj.passLength));
  //checks if the entry is less than 8 or more than 128 or if the entry is not a number
  //If true then sends an alert and asks the user to enter data again
  //If false then does not enter the loop
  while (checkLength < 8 || checkLength > 128 || isNaN(checkLength) ){
    alert("Not a valid entry. Try again!");
    checkLength = parseInt( prompt("How long do you want your password to be? Choose any length between 8 and 128"));
  };
  
  return(checkLength);
}

function randomPassword(charOptions){

  //choose random characters to create a password of the length of the password
  var newPassword = "";
  for (var i = 0; i < passwordObj.passLength;i++){
    var randomValue = Math.floor(Math.random() * (charOptions.length));
   // console.log(randomValue);
    newPassword += charOptions[randomValue];
    console.log(newPassword);
    
 }  
  return (newPassword);
}

function verifyPassword(passCheck,charChoices){
  var charChoice = "";
  var doNotMutate = [];
  var newString = ""
  var passwordCheck = passCheck;
  

  for (var i=0;i < charChoices.length;i++)
  {
    //debugger;
    console.log(charChoices);
    charChoice = charChoices[i];
    console.log(charChoice);
    var character = passwordObj[charChoice];
    console.log(character);
    charIndex = Math.floor(Math.random()*character.length);
    do {
      passwordIndex = Math.floor(Math.random()*passwordCheck.length)
      
    }
    while (doNotMutate.includes(passwordIndex));
    doNotMutate.push(passwordIndex);
    for (var j=0; j<passwordCheck.length;j++){
      if (j===passwordIndex){
        newString = newString + character[charIndex];
      } else {
       newString = newString + passwordCheck[j];
      }
    }

    passwordCheck = newString;
    newString = "";
        
  }

  return(passwordCheck);


}


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
console.log(generateBtn);
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


