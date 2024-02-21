// Characterset to be included in the password
const pool = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}
// Password length and character options
function getPasswordOptions() {
  const passwordLength = document.querySelector("#length").value;
  const lowerCase = document.querySelector("#lowerCase").checked;
  const upperCase = document.querySelector("#upperCase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const symbols = document.querySelector("#symbols").checked;

  if (passwordLength <  8 || passwordLength >  128) {
    alert("Invalid input. Please enter a number between  8 and  128.");
    return null; // Return null if passwordLength is invalid
  }

  const characterSets = [];
  if (lowerCase) characterSets.push(pool.lowerCase);
  if (upperCase) characterSets.push(pool.upperCase);
  if (numbers) characterSets.push(pool.numbers);
  if (symbols) characterSets.push(pool.symbols);

  if (characterSets.length ===  0) {
    alert("Please choose at least one option!");
    return null; // Return null if no options are selected
  }

  return {passwordLength, characterSets}; // Return the object only if the input is valid
}

// Function for getting a random element from an array
  function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// Function to generate password with user input
  function generatePassword() {
  
// Call getPasswordOptions and assign the returned object to options
  const options = getPasswordOptions();

// Check if options are valid
  if (!options) return null;

// Destructure passwordLength and characterSets from the options object
    const { passwordLength, characterSets } = options;
    let password = '';
  for (let i =  0; i < passwordLength; i++) {
    const randomCategory = getRandom(characterSets);
    password += getRandom(randomCategory);
  }
  return password;
}

// Get references to the generate element
  var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);

// Write password to the password field
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    if (password) {passwordText.value = password;}
    else {passwordText.value = "";}
}

