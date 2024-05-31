let display = document.getElementById("input");
// let allClear = document.getElementById("AC");
let calculate = document.getElementById("calculate");

function displayValue(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculation() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
