function add(a, b) { return a + b; }
function substract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a ,b) { return a / b; }

function addToDisplay(string) { 
    if(noContent) {
        screen.textContent = "";
        noContent = false;
    }
    screen.textContent += string; }
function setDisplay(string) { screen.textContent = string; }
function getDisplay() { return screen.textContent; }

let a = 0;
let op;
let b = 0;
let screen = document.querySelector(".screen");
let noContent = true;

function suboperate(a, op, b) {
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

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonContent = e.explicitOriginalTarget.textContent;
        switch (buttonContent) {
            case "Clear":
                break;
            case "Del":
                break;
            case "=":
                operate();
                break;
            default:
                addToDisplay(e.explicitOriginalTarget.textContent);
        }
    })
});

function operate() {
    let screenContent = getDisplay();
    // let operationArray = screenContent.split(/[+-]+/g);
    let operationArray = screenContent.split(/([+-/×/÷])/g);
    console.log(operationArray)
}