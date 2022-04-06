function add (a, b) {
    let num = a + b;
    return Math.round(num * 100) / 100;
}

function subtract(a, b) {
    let num = a - b;
    return Math.round(num * 100) / 100;
}

function multiply(a, b) {
    let num = a * b;
    return Math.round(num * 100) / 100;
}

function divide(a, b) {
    let num = a / b;
    return Math.round(num * 100) / 100;
}

function operate(operator, a, b) {
    if (operator==="plus") {
        return add(a, b);
    }else if (operator==="minus"){
        return subtract(a, b);
    }else if (operator==="times"){
        return multiply(a, b);
    }else if (operator==="divide"){
        return divide(a, b);
    }
}

function digitPress(digit) {
    const screen = document.querySelector(".screen");
    screen.textContent += digit.textContent;
    return screen.textContent;
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function() {
    digitPress(digit);
    })
);