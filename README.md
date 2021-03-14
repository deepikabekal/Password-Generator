# Password Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A website that asks the user for the length of the password, whether the password should include character types like lowercase, uppercase, numberic and special characters and generates a random password of the requested length and character types.

## Website
https://deepikabekal.github.io/Password-Generator/

## Screenshot


## Technologies Used
* HTML
* CSS
* Javascript

## Contact Info
If any queries please send me an email at deepika.bekal2@gmail.com


## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Code Changes
* An object that holds the password length and all the possible character types -lowercase, uppercase, numeric, special character.
* A function that prompts the user for password length and checks if the user input is valid and between 8 to 128 and returns the result to the password generator function
* A function which asks the users whether they want to include the character types. This is function is called in the generate password function.
* In generate password function, the while loop will check if the user has chosen atleast one character type. If none of the character types is selected then the user is prompted to select atleast one. Else all the possible characters in that category is added to an empty string.
* In the generate password function using the random method characters from the string of character types created is extracted and added to a variable until the for loop reaches the password length. 
* The password created is retuned to the function that will display it to the user in the text area.

## References
* Study Material for HTML, CSS and javascript provided by Trilogy Education Services.
* www.w3schools.com
* https://developer.mozilla.org/en-US/docs/
* Javascript and JQuery book by Jon Duckett
* https://javascript-workbook.netlify.app/
