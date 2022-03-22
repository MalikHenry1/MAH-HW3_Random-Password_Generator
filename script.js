// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var user_input = [8, false, false, false, false]; //initializing the array that will take in user inputs from the prompt.
var user_length = 8;
var userLower = false; 
var userUpper = false;
var userNumber = false;
var userSpecial = false;
var emptyPassword = "";
var userChoice = "";


// Here are the strings for each character type
var lwr = "abcdefghijklmnopqrstuvwxyz";
var upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nmbr = "0123456789";
var spcl = "!@#$%^&*()?><";

function generatePassword(user_length, userLower, userUpper, userNumber, userSpecial) {
 
  // The booleans passed in from the window.confrims are used as filters. Repsective strings are pushed or not depending on user choice.

if(userLower) {
    userChoice += lwr;
}

if(userUpper) {
    userChoice += upr;
}

if(userNumber) {
    userChoice += nmbr;
}

if(userSpecial) {
    userChoice += spcl;
}

for(i=0;i<user_length;i++){
  emptyPassword += userChoice.charAt(Math.floor(Math.random()*userChoice.length));
  
}
return emptyPassword;
  
  
  
}


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function(user_length, userLower, userUpper, userNumber, userSpecial) {

  var user_length = prompt("Please specify your desired password length (enter response as a number between 8 and 128, inclusive.)")
  if ((user_length >= 8) && (user_length <= 128)){
      window.alert("You chose a length of " + user_length + " characters for your passsword");
      user_input[0] = user_length;
  } else {
      window.alert("The password length you entered is not within the acceptable range. The generator has chosen an acceptable length for you.");
      user_input[0] = Math.floor(Math.random() * 120) + 8; // The robustness of the program is ensured here by accounting for invalid user inputs.
  }
 
  

var userLower = window.confirm("Would you like for your password to contian lower case letters?"); // Using booleans for the user input make the conditional statements
var userUpper = window.confirm("Would you like for your password to contian upper case letters?"); // easier to write.
var userNumber = window.confirm("Would you like for your password to contian numbers?");
var userSpecial = window.confirm("Would you like for your password to contian special characters?");
 

  if(!(userLower||userNumber||userSpecial||userUpper)){ // Robustness is ensured here by ensuring the user selects at least one character type.
    window.alert("Please select at least one character type.");
    generatePassword();
    return;
  }

  var newPassword = generatePassword(user_length, userLower, userUpper, userNumber, userSpecial);
  writePassword(newPassword);
  
}



);


