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
const state = ["add", "divide", "multiply", "equals", "subtracts"];
const numberEntry = [];
let mode = null;
topButtons.addEventListener("click", (e) => {
  if (e.target.name === "clear") {
    number.textContent = "";
    total.textContent = "";
  }
});

bottomButtons.addEventListener("click", (e) => {
  if (state[mode] === "add") {
    number.textContent = "";
    total.textContent += +e.target.value;
    numberEntry.push(+e.target.value);
    console.log(numberEntry);
    mode = null;
  }
  if (e.target.value === "7") {
    number.textContent += "7";
  }
  if (e.target.value === "8") {
    number.textContent += "8";
  }
  if (e.target.value === "9") {
    number.textContent += "9";
  }
  if (e.target.value === "6") {
    number.textContent += "6";
  }
  if (e.target.value === "5") {
    number.textContent += "5";
  }
  if (e.target.value === "4") {
    number.textContent += "4";
  }
  if (e.target.value === "3") {
    number.textContent += "3";
  }
  if (e.target.value === "2") {
    number.textContent += "2";
  }
  if (e.target.value === "1") {
    number.textContent += "1";
  }
  if (e.target.value === "0") {
    number.textContent += "0";
  }

  if (e.target.value === "+") {
    if (total.textContent.includes("=")) {
      const [, , sum] = total.textContent.split("=");
      total.textContent = sum;
    }
    mode = 0;
    numberEntry.push(+number.textContent);
    total.textContent += `${number.textContent}+`;
    console.log(numberEntry);
  }
  if (e.target.value === "equal") {
    let sum = numberEntry.reduce((acc, cur) => acc + cur, 0);
    total.textContent += `=${sum}`;
    number.textContent = sum;
    numberEntry.length = 0;
    console.log(numberEntry);
  }
});
