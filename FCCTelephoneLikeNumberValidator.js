/*TO.DO
1.alert with no input
2.clear button removes content in results div
3.checks for valid and invalid US numbers 
*/
const uInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")
/*
Validator- variations, valid
5555555555
15555555555
1(555)5555555 or (555)555-5555
1 555-555-5555
number should be 7,or 10 numbers long
allow dash, and parentheses, whitespace or no whitespace
*/
//Number Validator Expression
const phoneNumRegex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
// Functions
const clearFunction = () => {
  result.innerText = "";
  uInput.value = "";
}
clearBtn.addEventListener("click", function() {
  clearFunction();
});

checkBtn.addEventListener("click", function() {
  var number = uInput.value;
  if (number === '') {
    alert ("Please provide a phone number");
  } else if (phoneNumRegex.test(number)) {
    result.innerText = "Valid US number: " + number;
      result.style.color = "limegreen";
  } else {
    result.innerText = "Invalid US number: " + number;
      result.style.color = "red";
  }
});

// adding 0-9, and() button functionality
for (let i = 0; i <= 9; i++) {
    const digiButton = document.getElementById("phone-btn" + i);
    digiButton.addEventListener("click", function() {
        uInput.value += i; 
    });
}
const oParButton = document.getElementById("phone-btnx");

oParButton.addEventListener("click", function() {
    uInput.value += "(";
});

const cParButton = document.getElementById("phone-btnz");
cParButton.addEventListener("click", function() {
    uInput.value += ")";
});

