// Functions
const clear = document.querySelector(".clear");
const total = document.querySelector(".total");
const equation = document.querySelector(".equation");
const bottomButtons = document.querySelector(".bottom-buttons");
const topButtons = document.querySelector(".top-buttons");
// const state = ["typing", "add", "divide", "multiply", "equals", "subtracts"];
let state = "typing";
let previousValue;
topButtons.addEventListener("click", (e) => {
  if (e.target.name === "clear") {
    previousValue = "";
    total.value = "";
    equation.textContent = "";
    state = "typing";
  }
});

function operate(operator, num1, num2) {
  if (operator === "+") {
    return +num1 + +num2;
  }
  if (operator === "-") {
    return +num1 - +num2;
  }
  if (operator === "x") {
    return +num1 * +num2;
  }
  if (operator === "/") {
    let checkValue = +num1 / +num2;
    console.log(checkValue);
    if (!Number.isInteger(checkValue)) {
      return +checkValue.toFixed(3).toString();
    } else {
      return checkValue;
    }
  }
}

bottomButtons.addEventListener("click", (e) => {
  if (
    e.target.value !== "+" &&
    e.target.value !== "x" &&
    e.target.value !== "/" &&
    e.target.value !== "-" &&
    e.target.value !== "="
  ) {
    if (equation.textContent.includes("+") && state === "add") {
      previousValue = total.value;
      total.value = "";
      state = "typing";
    }
    if (equation.textContent.includes("+") && state === "end") {
      total.value = "";
      equation.textContent = "";
      state = "typing";
    }
    if (equation.textContent.includes("-") && state === "subtract") {
      previousValue = total.value;
      total.value = "";
      state = "typing";
    }
    if (equation.textContent.includes("x") && state === "multiply") {
      previousValue = total.value;
      total.value = "";
      state = "typing";
    }
    if (equation.textContent.includes("/") && state === "divide") {
      previousValue = total.value;
      total.value = "";
      state = "typing";
    }
    if (state === "typing") {
      total.value += e.target.value;
    }
  }
  if (e.target.value === "+") {
    state = "add";

    if (equation.textContent.includes("+")) {
      total.value = operate("+", previousValue, +total.value);
    } else if (equation.textContent.includes("-")) {
      total.value = operate("-", previousValue, +total.value);
    } else if (equation.textContent.includes("x")) {
      total.value = operate("x", previousValue, +total.value);
    } else if (equation.textContent.includes("/")) {
      total.value = operate("/", previousValue, +total.value);
    }
    equation.textContent = `${total.value}+`;
    // Testing to see if still needed
    // else {
    //   sumAll.push(+total.value);
    // }
  }
  if (e.target.value === "-") {
    state = "subtract";
    if (equation.textContent.includes("-")) {
      total.value = operate("-", previousValue, +total.value);
    }
    if (equation.textContent.includes("+")) {
      total.value = operate("+", previousValue, +total.value);
    }
    if (equation.textContent.includes("x")) {
      total.value = operate("x", previousValue, +total.value);
    }
    if (equation.textContent.includes("/")) {
      total.value = operate("/", previousValue, +total.value);
    }
    // Testing to see if still needed
    // else {
    //   sumAll.push(+total.value);
    // }
    equation.textContent = `${total.value}-`;
  }
  if (e.target.value === "x") {
    state = "multiply";
    if (equation.textContent.includes("+")) {
      total.value = operate("+", previousValue, +total.value);
    } else if (equation.textContent.includes("-")) {
      total.value = operate("-", previousValue, +total.value);
    } else if (equation.textContent.includes("x")) {
      total.value = operate("x", previousValue, +total.value);
    } else if (equation.textContent.includes("/")) {
      total.value = operate("/", previousValue, +total.value);
    }
    equation.textContent = `${total.value}x`;
    // Testing to see if still needed
    // else {
    //   sumAll.push(+total.value);
    // }
  }
  if (e.target.value === "/") {
    state = "divide";
    if (equation.textContent.includes("+")) {
      total.value = operate("+", previousValue, +total.value);
    } else if (equation.textContent.includes("-")) {
      total.value = operate("-", previousValue, +total.value);
    } else if (equation.textContent.includes("x")) {
      total.value = operate("x", previousValue, +total.value);
    } else if (equation.textContent.includes("/")) {
      total.value = operate("/", previousValue, +total.value);
    }
    equation.textContent = `${total.value}/`;
    // Testing to see if still needed
    // else {
    //   sumAll.push(+total.value);
    // }
  }
  if (e.target.value === "=") {
    equation.textContent += `${total.value}=`;
    if (equation.textContent.includes("+")) {
      total.value = operate("+", previousValue, +total.value);
    }
    if (equation.textContent.includes("-")) {
      total.value = operate("-", previousValue, +total.value);
    }
    if (equation.textContent.includes("x")) {
      total.value = operate("x", previousValue, +total.value);
    }
    if (equation.textContent.includes("/")) {
      total.value = operate("/", previousValue, +total.value);
    }
    state = "end";
  }
});
