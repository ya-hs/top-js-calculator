const display = document.querySelector("#display");
const btnNum = document.querySelectorAll(".btn-num");
const btnOp = document.querySelectorAll(".btn-op");
const btnEquals = document.querySelector("#btn-equals");
const btnSelector = document.querySelectorAll("button");
const btnClear = document.querySelector("#btn-clear");

let displayText = "";
let firstNumber = "";
let secondNumber = "";

let runningTotal = "";
let currentNumber = "";
let numClicks = 0
display.textContent = displayText;




// EVENT LISTENERS

btnEquals.addEventListener('click', () => {
    performCalculation();
})

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        addToDisplay(button.innerText);
    })
})

btnClear.addEventListener('click', clearMemory);

btnOp.forEach(button => {
    button.addEventListener('click', () => {
        storeNums();
        clearNums();
        chosenOperator = button.id;
        display.textContent = runningTotal;
    })
})



// FEATURE FUNCTIONS

//Adds the innerText of btnNum when clicked to the display
function addToDisplay(numClicked) {
    displayText += numClicked;
    if (displayText.length < 14) {
        display.textContent = displayText;
    }
    else {
        display.textContent = displayText.substring(0, 14);
    }
}

// Stores the current number and running total in order to chain operations together
function storeNums() {
    currentNumber = display.textContent;
    console.log("Beginning CN: " + currentNumber);
    console.log("Beginning RT: " + runningTotal);
    if (numClicks > 0) {
        const previousResult = operate(runningTotal, currentNumber, chosenOperator);
        runningTotal = previousResult;
    } else {
        runningTotal = display.textContent;
    }
    console.log("Ending CN: " + currentNumber);
    console.log("Ending RT: " + runningTotal);
    numClicks++;
}

// Clears the display and resets current number
function clearNums() {
    firstNumber = displayText;
    displayText = "";
    display.textContent = displayText;
    currentNumber = "";

}

// Performs final calculation when equals is clicked
function performCalculation() {
    const secondNumber = displayText;
    const result = operate(Number(runningTotal), Number(secondNumber), chosenOperator);
    displayText = result;
    if (result === Infinity) {
        display.textContent = "NOPE"
    } else {
        display.textContent = result;
    }
    console.log(operate(runningTotal, secondNumber, chosenOperator));
}

// Inputs current number and running total into the appropriate arithmetic function
function operate(num1, num2, operator) {
    const operations = {
        "btn-add": add,
        "btn-subtract": subtract,
        "btn-multiply": multiply,
        "btn-divide": divide,
        "btn-square": square,
    };
    return operations[operator](num1, num2);
}

// Resets the calculator back to first-open status when the clear button is clicked
function clearMemory() {
    displayText = "";
    display.textContent = displayText;
    firstNumber = "";
    secondNumber = "";
    runningTotal = "";
    currentNumber = "";
    numClicks = 0;
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
    let result = Number(num1) / Number(num2);
    return result;
}
function square(num) {
    return Number(num) ** 2;
}
