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
        case "+":
            return add(+a ,+b);
        case "-":
            return substract(+a, +b);
        case "×":
            return multiply(+a, +b);
        case "÷":
            return divide(+a, +b);
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonContent = e.explicitOriginalTarget.textContent;
        switch (buttonContent) {
            case "Clear":
                setDisplay("0")
                noContent = true;
                break;
            case "Del":
                screen.textContent = screen.textContent.slice(0 ,-1) 
                break;
            case "=":
                operate();
                break;
            default:
                let display = getDisplay();
                let lastChar = display[display.length-1]
                let lastIsANumber = !isNaN(lastChar);
                let buttonContentIsANumber = !isNaN(buttonContent);
                
                if(lastIsANumber) {
                    addToDisplay(buttonContent);
                }
                else {
                    if(buttonContentIsANumber) {
                        addToDisplay(buttonContent);
                    }
                    else{
                        display = getDisplay();
                        let newDisplay = display.slice(0, -1);
                        newDisplay+=buttonContent;
                        setDisplay(newDisplay)
                    }
                }
        }
    })
});

function areOperatorsInArray(array) {
    for(let i = 0; i<array.length; i++) {
        let e = array[i];
        if (e === "+" || e === "-" || e === "×" || e === "÷") {
            return true;
        }
    }
    return false;
}

function operate() {
    let screenContent = getDisplay();
    let opArray = screenContent.split(/([+-/×/÷])/g);
    console.log(opArray)

    while(areOperatorsInArray(opArray)) {
        for(let i = 0; i<opArray.length; i++) {
            let e = opArray[i];
            if (e === "×" || e === "÷") {
                let result = suboperate(opArray[i-1], opArray[i], opArray[i+1])
                opArray[i] = result;
                opArray.splice(i-1, 1)
                opArray.splice(i, 1)
                console.log(opArray)
            
                break;
            }
        }
        for(let i = 0; i<opArray.length; i++) {
            let e = opArray[i];
            if (e === "+" || e === "-") {
                let result = suboperate(opArray[i-1], opArray[i], opArray[i+1])
                opArray[i] = result;
                opArray.splice(i-1, 1)
                opArray.splice(i, 1)
                console.log(opArray)
                
                break;
            }
        }
    }
    setDisplay(opArray[0])
}