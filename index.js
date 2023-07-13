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
const total = document.querySelector(".total");
const equation = document.querySelector(".equation");
const bottomButtons = document.querySelector(".bottom-buttons");
const topButtons = document.querySelector(".top-buttons");
// const state = ["typing", "add", "divide", "multiply", "equals", "subtracts"];
const operators = ["+", "-", "x", "/", "="];
const numberEntry = [];
let mode = null;
topButtons.addEventListener("click", (e) => {
  if (e.target.name === "clear") {
    total.value = "";
    equation.textContent = "";
    state = "typing";
  }
});

const calculator = {
  state: "typing",
  total: "",
  equation: "",
  sumAll: [],
  operators: ["+", "-", "x", "/", "="],
};

function addOperator(num, arr) {
  arr.push(num);
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function subtractOperator(num, arr) {
  arr.push(num);
  return arr.reduce((acc, cur) => acc - cur);
}
bottomButtons.addEventListener("click", (e) => {
  if (
    e.target.value !== "+" &&
    e.target.value !== "x" &&
    e.target.value !== "/" &&
    e.target.value !== "-" &&
    e.target.value !== "="
  ) {
    if (equation.textContent.includes("+") && calculator.state === "add") {
      total.value = "";
      calculator.state = "typing";
    }
    if (equation.textContent.includes("+") && calculator.state === "end") {
      total.value = "";
      equation.textContent = "";
      calculator.state = "typing";
    }
    if (equation.textContent.includes("-") && calculator.state === "subtract") {
      total.value = "";
      calculator.state = "typing";
    }
    if (calculator.state === "typing") {
      calculator.total = total.value += e.target.value;
    }
  }
  if (e.target.value === "+") {
    calculator.state = "add";
    if (equation.textContent.includes("+")) {
      total.value = addOperator(+total.value, calculator.sumAll);
    } else {
      calculator.sumAll.push(+total.value);
    }
    equation.textContent = `${total.value}+`;
  }
  if (e.target.value === "-") {
    calculator.state = "subtract";
    if (equation.textContent.includes("-")) {
      total.value = subtractOperator(+total.value, calculator.sumAll);
    } else {
      calculator.sumAll.push(+total.value);
    }
    equation.textContent = `${total.value}-`;
  }
  if (e.target.value === "=") {
    equation.textContent += `${total.value}=`;
    if (equation.textContent.includes("+")) {
      total.value = addOperator(+total.value, calculator.sumAll);
    }
    if (equation.textContent.includes("-")) {
      total.value = subtractOperator(+total.value, calculator.sumAll);
    }

    calculator.state = "end";
    calculator.sumAll.length = 0;
  }
});
