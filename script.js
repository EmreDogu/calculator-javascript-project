let beforeArray = [];
let afterArray = [];
let screen = document.querySelector(".screen");
let flag = true;

function add(a, b) {
    let num = Number(a) + Number(b);
    screen.textContent = Math.round(num * 1000) / 1000;
}

function subtract(a, b) {
    let num = Number(a) - Number(b);
    screen.textContent = Math.round(num * 1000) / 1000;
}

function multiply(a, b) {
    let num = Number(a) * Number(b);
    screen.textContent = Math.round(num * 1000) / 1000;
}

function divide(a, b) {
    if (b === "0") {
        screen.textContent = "You naught naughty :)";
    } else {
        let num = Number(a) / Number(b);
        screen.textContent = Math.round(num * 1000) / 1000;
    }
}

function factorial(a) {
    let factorial = 1;
    let fact = Number(a);
    while (fact>1) {
      factorial *= fact;
      fact--;
    }
    screen.textContent = Math.round(factorial * 1000) / 1000;
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
  screen.textContent = Math.round(power * 1000) / 1000;
}

function mod(a, b) {
    let mod = Number(a) % Number(b);
    screen.textContent = Math.round(mod * 1000) / 1000;
}

function root(a, b) {
    let root = Math.pow(Number(b), 1/Number(a));
    screen.textContent = Math.round(root * 1000) / 1000;
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
    } else if (operator === "mod") {
        return mod(a, b);
    } else if (operator === "root") {
        return root(a, b);
    }
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function () {
    if (flag) {
        screen.textContent += digit.textContent;
    }
})
);

const float = document.querySelector(".float");
float.addEventListener("click", function () {
    if (screen.textContent!="" && flag && !screen.textContent.includes(".")) {
        screen.textContent += float.textContent;
    }
});

const negative = document.querySelector(".negative");
negative.addEventListener("click", function () {
    if (screen.textContent=="") {
        screen.textContent = "-";
    }else if (screen.textContent=="-") {
        screen.textContent = "";
    }
});

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

    if (!beforeArray.includes("plus") && !beforeArray.includes("minus") && !beforeArray.includes("times") && !beforeArray.includes("divided") && !beforeArray.includes("power") && !beforeArray.includes("mod")) {
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
        } else if (op.textContent === "%") {
            beforeArray.push("mod");
            screen.textContent = "";
        } else if (op.id === "root") {
            beforeArray.push("root");
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

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
    if (flag) {
        if (screen.textContent!="") {
            screen.textContent=screen.textContent.slice(0, screen.textContent.length-1);
        }
    }
});