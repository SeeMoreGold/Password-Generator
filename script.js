// Assignment Code
document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/03/03/13/56/key-2114046_960_720.jpg);"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// These are the prompts for the criteria
  var passLength = prompt("Choose a desired length for your password. Must be at least 8 and not more than 128 characters.");
  var lowercaseType = confirm("Do you want lowercase characters in your password?");
  var uppercaseType = confirm("Do you want uppercase characters in your password?");
  var numericType = confirm("Do you want numeric characters in your password?");
  var specialType = confirm("Do you want special characters in your password?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
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


  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

