let display = document.querySelector(".display");
let appendDisplay = (value) => {
  display.value += value;
};
let calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};
let clearDisplay = () => {
  display.value = "";
};
