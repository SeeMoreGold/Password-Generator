var generateBtn = document.querySelector("#generate");
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
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
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

// Write password to the #password input
function generatePassword() {
// These are the prompts for the criteria
  var passLength = parseInt(prompt("Choose a desired length for your password. Type a number between 8 and 128."));
  if(passLength<8){
    alert("Please add password length between 8 and 128");
    return;
  }

  if(passLength>128){
    alert("Please add password length between 8 and 128");
    return;
  }

  var lowercaseType = confirm("Do you want lowercase characters in your password?");
  var uppercaseType = confirm("Do you want uppercase characters in your password?");
  var numericType = confirm("Do you want numeric characters in your password?");
  var specialType = confirm("Do you want special characters in your password?");

  if(lowercaseType === false && uppercaseType===false && numericType===false && specialType===false){
    alert("You must select at least one option.");
    return;
  }
  
  var pwdOption  = [];
  var possibleChar = [];
  var finalChar = [];

  if(lowercaseType){
    pwdOption = pwdOption.concat(lowerCasedCharacters);
    finalChar.push(lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]);
    console.log("FInal char array: "+finalChar);
  }

  if(uppercaseType){
    pwdOption = pwdOption.concat(upperCasedCharacters);
    finalChar.push(upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]);
    console.log("FInal char array: "+finalChar);
  }

  if(numericType){
    pwdOption = pwdOption.concat(numericCharacters);
    finalChar.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
    console.log("FInal char array: "+finalChar);
  }

  if(specialType){
    pwdOption = pwdOption.concat(specialCharacters);
    finalChar.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    console.log("FInal char array: "+finalChar);
  }

  for(var i=0;i<passLength;i++){
    var temp = pwdOption[Math.floor(Math.random() * pwdOption.length)];
    possibleChar.push(temp);
    console.log("Possible chars: "+possibleChar);
  }

  for(var i=0;i<finalChar.length;i++){
    possibleChar[i] = finalChar[i];
  }
  return possibleChar.join("");

  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

