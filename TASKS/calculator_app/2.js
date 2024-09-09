let displayValue = '';
let firstValue = null;
let secondValue = null;
let operation = null;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function setOperation(op) {
    if (displayValue === '') return;

    firstValue = parseFloat(displayValue);
    operation = op;
    displayValue = '';
}

function calculateResult() {
    if (displayValue === '' || firstValue === null || operation === null) return;

    secondValue = parseFloat(displayValue);
    let result;
    
    switch (operation) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = secondValue !== 0 ? firstValue / secondValue : 'Error';
            break;
        default:
            result = 'Error';
            break;
    }

    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    firstValue = null;
    secondValue = null;
    operation = null;
}

function clearDisplay() {
    displayValue = '';
    firstValue = null;
    secondValue = null;
    operation = null;
    document.getElementById('display').value = '';
}
