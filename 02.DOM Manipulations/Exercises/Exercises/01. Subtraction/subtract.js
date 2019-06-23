function subtract() {
    let firstInput = document.getElementById('firstNumber').value;
    let secondInput = document.getElementById('secondNumber').value;
    let resultField = document.getElementById('result');

    let result = Number(firstInput) - Number(secondInput);
    resultField.textContent = result;
}