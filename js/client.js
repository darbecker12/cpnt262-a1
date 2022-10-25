
// Creating variables for the text and numbers
const addingText = document.querySelector('.addingText');
const addingNumber = document.querySelector('.addingNumber');

// Function for adding a message
const addText = function(){
  const text = prompt('What would you like to add?');
  addingText.innerHTML = `Added: ${text}`;
}

// Function for adding a number
const addNumber = function() {
  const number = prompt('Pick a number');
  addingNumber.innerHTML = `Added ${number}`;
}

// Adding query selector for the text and number buttons
const buttonText = document.querySelector('.buttonText');
const buttonNumber = document.querySelector('.buttonNumber');

// Event listeners for the buttons to run the functions
buttonText.addEventListener('click', addText);
buttonNumber.addEventListener('click', addNumber);






