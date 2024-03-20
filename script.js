const display = document.querySelector("#display");
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
const btnEquals = document.querySelector("#btn-equals");
const btnSelector = document.querySelectorAll("button");

let displayText = "";
let firstNumber = "";
let secondNumber = "";


// ADD CLICKED NUMBER TO DISPLAY


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

btnEquals.addEventListener('click', () => {
    performCalculation();
})


btnOp.forEach(button => {
    button.addEventListener('click', () => {
        clearNums();
        return chosenOperator = button.id;
    })
})

function clearNums() {
    firstNumber = displayText;
    displayText = "";
    display.textContent = displayText;
}

function performCalculation() {
    const secondNumber = displayText;
    const result = operate(firstNumber, secondNumber, chosenOperator);
    displayText = result;
    display.textContent = result;
    console.log(operate(firstNumber, secondNumber, chosenOperator));
}

function operate(num1, num2, operator) {
    const operations = {
        "btn-add": add,
        "btn-subtract": subtract,
        "btn-multiply": multiply,
        "btn-divide": divide,
        "btn-square": square
    };
    return operations[operator](num1, num2);
}




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
