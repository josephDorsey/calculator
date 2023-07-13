// Functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

const multiply = function (...args) {
  let sum = args.reduce((acc, cur) => acc * cur, 1);
  return sum;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

const clear = document.querySelector(".clear");
const number = document.querySelector(".number");
const total = document.querySelector(".total");
const bottomButtons = document.querySelector(".bottom-buttons");
const topButtons = document.querySelector(".top-buttons");
topButtons.addEventListener("click", (e) => {
  if (e.target.name === "clear") {
    number.textContent = "";
    total.textContent = "";
  }
});

bottomButtons.addEventListener("click", (e) => {
  if (e.target.value === "7") {
    number.textContent += "7";
  }
});
