const display = document.querySelector("#display");

// const btnClear = document.querySelector("#btn-clear");
// const btnBackspace = document.querySelector("#btn-back");
// const btnSquare = document.querySelector("#btn-square");
// const btnDivide = document.querySelector("#btn-divide");
// const btnSeven = document.querySelector("#btn-7");
// const btnEight = document.querySelector("#btn-8");
// const btnNine = document.querySelector("#btn-9");
// const btnMultiply = document.querySelector("#btn-multiply");
// const btnFour = document.querySelector("#btn-4");
// const btnFive = document.querySelector("#btn-5");
// const btnSix = document.querySelector("#btn-6");
// const btnSubtract = document.querySelector("#btn-subtract");
// const btnOne = document.querySelector("#btn-1");
// const btnTwo = document.querySelector("#btn-2");
// const btnThree = document.querySelector("#btn-3");
// const btnAdd = document.querySelector("#btn-add");
// const btnPoint = document.querySelector("#btn-point");
// const btnZero = document.querySelector("#btn-0");
// const btnEquals = document.querySelector("#btn-equals");

const btnSelector = document.querySelectorAll("button");

btnSelector.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Hello World!");
    });
});

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

console.log(add(6, 3));
console.log(subtract(6, 3));
console.log(multiply(6, 3));
console.log(divide(6, 3));
console.log(square(3));