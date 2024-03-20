const display = document.querySelector("#display");
const btnNum = document.querySelectorAll(".btn-num");
const btnSelector = document.querySelectorAll("button");


// ARITHMETIC FUNCTIONS

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
function square(num) {
    return num ** 2;
}

function operate(num1, num2, operator) {
    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "sub") {
        return subtract(num1, num2);
    } else if (operator == "multi") {
        return multiply(num1, num2);
    } else if (operator == "div") {
        return divide(num1, num2);
    } else if (operator == "squ") {
        return square(num1);
    }
}

// ADD CLICKED NUMBER TO DISPLAY

let displayText = "";
display.textContent = displayText;

function addToDisplay(numClicked) {
    displayText += numClicked;
    display.textContent = displayText;
}

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        addToDisplay(button.innerText);
    })
})


// TESTING

console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));
console.log(square(3));
console.log(operate(3, 7, "add"));