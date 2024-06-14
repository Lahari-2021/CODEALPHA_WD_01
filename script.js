let display = document.getElementById('display');
let displayValue = '';

function appendCharacter(char) {
    if (displayValue === '0') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    display.innerText = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    display.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    display.innerText = displayValue;
}
