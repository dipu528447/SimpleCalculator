let screen=0, operation="", firstOperand=0, secondOperand=0;

function buttonAction(pressedButton)
{
    console.log(pressedButton);
    if (pressedButton == "Ac" || pressedButton == "C") {
        screen = 0;
    }
    else if (pressedButton == "X 2") {
        screen=Math.pow(screen,2);
    }
    else if (pressedButton == "<") {
        screen = (screen-(screen%10)) / 10;
    }
    else if (pressedButton == "/") {
        operation = "/";
        firstOperand = screen;
        screen = 0;
    }
    else if (pressedButton == "X") {
        operation = "*";
        firstOperand = screen;
        screen = 0;
    }
    else if (pressedButton == "-") {
        operation = "-";
        firstOperand = screen;
        screen = 0;
    }
    else if (pressedButton == "=") {
        secondOperand =screen;
        if(operation == '+'){
            screen = firstOperand + secondOperand;
        }
        else if(operation == '-'){
            screen = firstOperand - secondOperand;
        }
        else if(operation == '*'){
            screen = (firstOperand * secondOperand).toFixed(3);
        }
        else if(operation == '/'){
            screen = (firstOperand / secondOperand).toFixed(3);
        }
        else if(operation == '%'){
            screen = firstOperand % secondOperand;
        }
    }
    else if (pressedButton == "%") {
        operation = "%";
        firstOperand = screen;
        screen = 0;
    }
    else if (pressedButton == "+") {
        operation = "+";
        firstOperand = screen;
        screen = 0;
    }
    else {
        screen = (screen * 10) + parseInt(pressedButton);
    }
    updateScreen();
}
function updateScreen() {
    if(screen<999999999999999 || screen=='Infinity'){
        document.getElementById("screen_1").innerText = screen;
    }
    
}
updateScreen();