let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

const sum_el = document.getElementById('sum-el');
let result;

function add() {
    result = num1 + num2;
    showResult();
}
function subtract() {
    result = num1 - num2;
    showResult();
}
function divide() {
    result = num1 / num2;
    showResult();
}
function multiply() {
    result = num1 * num2;
    showResult();
}

function showResult() {
    sum_el.textContent = 'Sum: ' + result;
}