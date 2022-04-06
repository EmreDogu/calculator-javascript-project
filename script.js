let beforeArray = [];
let afterArray = [];
let screen = document.querySelector(".screen");

function add(a, b) {
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
    screen.textContent += digit.textContent;
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function() {
    digitPress(digit);
    })
);

const operator = document.querySelectorAll(".operator");
operator.forEach(op => op.addEventListener("click", function() {
    if (screen.textContent!="") {
        beforeArray.push(screen.textContent);
    }
    if (beforeArray.length >= 3) {
        operate(beforeArray);
        beforeArray.shift();
        beforeArray.shift();
        beforeArray[0] = screen.textContent;
    }
        if (op.textContent === "+") {
            beforeArray.push("plus");
            screen.textContent = "";
        }else if (op.textContent === "-") {
            beforeArray.push("minus");
            screen.textContent = "";
        }else if (op.textContent === "*") {
            beforeArray.push("times");
            screen.textContent = "";
        }else if (op.textContent === "/") {
            beforeArray.push("divided");
            screen.textContent = "";
        }
    })
);

const result = document.querySelector(".result");
result.addEventListener("click", function() {
    beforeArray.push(document.querySelector(".screen").textContent);
    if (beforeArray.length >= 3) {
        operate(beforeArray);
        beforeArray.shift();
        beforeArray.shift();
        beforeArray.shift();
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    screen.textContent = "";
});