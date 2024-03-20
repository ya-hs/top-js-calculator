const display = document.querySelector("#display");
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
const btnEquals = document.querySelector("#btn-equals");
const btnSelector = document.querySelectorAll("button");
const btnAdd = document.querySelector("#btn-add");


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


// FUNCTIONS

let firstNumber = "";
let secondNumber = "";

btnOp.forEach(button => {
    button.addEventListener('click', () => {
        clearNums();
        console.log(operate(3, 6, button.id));
        console.log(firstNumber);
        return chosenOperator = button.id;
    })
})

function clearNums() {
    firstNumber = displayText;
    displayText = "";
    display.textContent = displayText;
}

function operate(num1, num2, operator) {

    if (operator == "btn-add") {
        return add(num1, num2);
    } else if (operator == "btn-subtract") {
        return subtract(num1, num2);
    } else if (operator == "btn-multiply") {
        return multiply(num1, num2);
    } else if (operator == "btn-divide") {
        return divide(num1, num2);
    } else if (operator == "btn-square") {
        return square(num1);
    }
}

btnEquals.addEventListener('click', () => {
    secondNumber = displayText;
    displayText = operate(firstNumber, secondNumber, chosenOperator);
    display.textContent = displayText;
    console.log(operate(firstNumber, secondNumber, chosenOperator));
})



// ARITHMETIC FUNCTIONS

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}
function square(num) {
    return Number(num) ** 2;
}


// TESTING

console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));
console.log(square(3));
console.log(operate(3, 7, "add"));