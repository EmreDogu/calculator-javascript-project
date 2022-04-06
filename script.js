let beforeArray = [];
let afterArray = [];
const screen = document.querySelector(".screen");

function add (a, b) {
    let num = Number(a) + Number(b);
    screen.textContent = Math.round(num * 100) / 100;
}

function subtract(a, b) {
    let num = Number(a) - Number(b);
    screen.textContent = Math.round(num * 100) / 100;
}

function multiply(a, b) {
    let num = Number(a) * Number(b);
    screen.textContent = Math.round(num * 100) / 100;
}

function divide(a, b) {
    let num = Number(a) / Number(b);
    screen.textContent = Math.round(num * 100) / 100;
}

function operate(... args) {
    afterArray = args[0];
    let a = afterArray[0];
    let operator = afterArray[1];
    let b = afterArray[2];
    if (operator==="plus") {
        return add(a, b);
    }else if (operator==="minus"){
        return subtract(a, b);
    }else if (operator==="times"){
        return multiply(a, b);
    }else if (operator==="divided"){
        return divide(a, b);
    }
}

function digitPress(digit) {
    const screen = document.querySelector(".screen");
    return screen.textContent;
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function() {
    digitPress(digit);
    })
);

const operator = document.querySelectorAll(".operator");
operator.forEach(op => op.addEventListener("click", function() {
    beforeArray.push(document.querySelector(".screen").textContent);
        if (op.textContent === "+") {
            beforeArray.push("plus");
            document.querySelector(".screen").innerHTML = "";
        }else if (op.textContent === "-") {
            beforeArray.push("minus");
            document.querySelector(".screen").innerHTML = "";
        }else if (op.textContent === "*") {
            beforeArray.push("times");
            document.querySelector(".screen").innerHTML = "";
        }else if (op.textContent === "/") {
            beforeArray.push("divided");
            document.querySelector(".screen").innerHTML = "";
        }
    })
);

const result = document.querySelector(".result");
result.addEventListener("click", function() {
    beforeArray.push(document.querySelector(".screen").textContent);
    if (beforeArray.length >= 3) {
        operate(beforeArray);
        beforeArray = [];
    }
});