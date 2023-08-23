function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a ,b) {
    return a / b;
}

let a = 0;
let op;
let b = 0;

function operate(a, op, b) {
    switch(op) {
        case "add":
            return add(a ,b);
        case "sub":
            return substract(a, b);
        case "mult":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}