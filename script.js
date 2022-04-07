//root, backspace, -'li sayı (minus class), float, mod to be added

let beforeArray = [];
let afterArray = [];
let screen = document.querySelector(".screen");
let flag = true;

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
    if (b === "0") {
        screen.textContent = "You naught naughty :)";
    } else {
        let num = Number(a) / Number(b);
        screen.textContent = Math.round(num * 100) / 100;
    }
}

function factorial(a) {
    let factorial = 1;
    let fact = Number(a);
    while (fact>1) {
      factorial *= fact;
      fact--;
    }
    screen.textContent = factorial;
}

function power(a, b) {
    let base = Number(a);
    let times = Number(b);
    let i = 0;
    let power = 1;
	while (i<times) {
    power *= base;
    i++;
  }
  screen.textContent = power;
}

function operate(...args) {
    afterArray = args[0];
    let a = afterArray[0];
    let operator = afterArray[1];
    let b = afterArray[2];
    if (operator === "plus") {
        return add(a, b);
    } else if (operator === "minus") {
        return subtract(a, b);
    } else if (operator === "times") {
        return multiply(a, b);
    } else if (operator === "divided") {
        return divide(a, b);
    } else if (operator === "power") {
        return power(a, b);
    }
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function () {
    if (flag) {
        screen.textContent += digit.textContent;
    }
})
);

const operator = document.querySelectorAll(".operator");
operator.forEach(op => op.addEventListener("click", function () {
    flag = true;

    if(op.textContent=="x!") {
        flag = false;
        factorial(screen.textContent);
        return;
    }

    if (screen.textContent != "") {
        beforeArray.push(screen.textContent);
    }

    if (beforeArray.length >= 3) {
        operate(beforeArray);
        beforeArray.shift();
        beforeArray.shift();
        beforeArray[0] = screen.textContent;
    }

    if (!beforeArray.includes("plus") && !beforeArray.includes("minus") && !beforeArray.includes("times") && !beforeArray.includes("divided") && !beforeArray.includes("power")) {
        if (op.textContent === "+") {
            beforeArray.push("plus");
            screen.textContent = "";
        } else if (op.textContent === "-") {
            beforeArray.push("minus");
            screen.textContent = "";
        } else if (op.textContent === "*") {
            beforeArray.push("times");
            screen.textContent = "";
        } else if (op.textContent === "/") {
            beforeArray.push("divided");
            screen.textContent = "";
        } else if (op.id === "power") {
            beforeArray.push("power");
            screen.textContent = "";
        }
    }
})
);

const result = document.querySelector(".result");
result.addEventListener("click", function () {
    if (beforeArray.length >= 2) {
        if (screen.textContent != "") {
            beforeArray.push(screen.textContent);
            operate(beforeArray);
            beforeArray.shift();
            beforeArray.shift();
            beforeArray.shift();
            flag = false;
        }
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    flag = true;
    screen.textContent = "";
    beforeArray = [];
});