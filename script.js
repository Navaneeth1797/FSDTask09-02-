let bodyDiv = document.querySelector("#body");

let calculatorDiv = document.createElement("div");
calculatorDiv.setAttribute("class", "calculator");

let displayDiv = document.createElement("div");
displayDiv.id = "displaydiv";

let display = document.createElement("input");
//display.setAttribute('type', 'text');
display.setAttribute("placeholder", "0");
display.setAttribute("class", "display");
display.id = "displayinput";
display.readOnly = true;

displayDiv.appendChild(display);

calculatorDiv.appendChild(displayDiv);

let bttnDiv = document.createElement("div");
bttnDiv.setAttribute("class", "buttons");

calculatorDiv.appendChild(bttnDiv);

function bttn(tagname, attributename, attributevalue, content, bttnvalue) {
  let button = document.createElement(tagname);
  button.setAttribute(attributename, attributevalue);
  button.innerHTML = content;
  button.id = bttnvalue;
  return button;
}

let bttnClear = bttn("button", "class", "bttn", "C", "clear");
let bttnBack = bttn("button", "class", "bttn", "←", "back");
let bttnDot = bttn("button", "class", "bttn", ".", ".");
let bttnMul = bttn("button", "class", "bttn", "x", "multiply");
let bttnSeven = bttn("button", "class", "bttn", "7", "7");
let bttnEight = bttn("button", "class", "bttn", "8", "8");
let bttnNine = bttn("button", "class", "bttn", "9", "9");
let bttnDivide = bttn("button", "class", "bttn", "/", "divide");
let bttnFour = bttn("button", "class", "bttn", "4", "4");
let bttnFive = bttn("button", "class", "bttn", "5", "5");
let bttnSix = bttn("button", "class", "bttn", "6", "6");
let bttnSub = bttn("button", "class", "bttn", "-", "subtraction");
let bttnOne = bttn("button", "class", "bttn", "1", "1");
let bttnTwo = bttn("button", "class", "bttn", "2", "2");
let bttnThree = bttn("button", "class", "bttn", "3", "3");
let bttnPlus = bttn("button", "class", "bttn", "+", "addition");
let bttnZero = bttn("button", "class", "bttn0", "0", "0");
let bttnDBZero = bttn("button", "class", "bttn00", "00", "00");
let bttnSubmit = bttn("button", "class", "bttnEqual", "=", "equal");

bttnDiv.append(
  bttnClear,
  bttnBack,
  bttnDot,
  bttnMul,
  bttnSeven,
  bttnEight,
  bttnNine,
  bttnDivide,
  bttnFour,
  bttnFive,
  bttnSix,
  bttnSub,
  bttnOne,
  bttnTwo,
  bttnThree,
  bttnPlus,
  bttnZero,
  bttnDBZero,
  bttnSubmit
);

bodyDiv.append(calculatorDiv);

let displyOutput = document.querySelector("#displayinput");
let buttonOutput = document.querySelectorAll("button");

buttonOutput.forEach((btn) => {
  btn.addEventListener("click", () => {
    let lastChar = displyOutput.value.slice(-1);

    if (btn.id === "equal") {
       displyOutput.value = eval(displyOutput.value.replace(/x/g, "*"));
    } else if (btn.id === "clear") {
      displyOutput.value = " ";
    } else if (btn.id === "back") {
      displyOutput.value = displyOutput.value.slice(0, -1);
    } else if (
      btn.id === "addition" ||
      btn.id === "subtraction" ||
      btn.id === "multiply" ||
      btn.id === "divide" ||
      btn.id === "."
    ) {
      if (/\d$/.test(lastChar)) {
        displyOutput.value += btn.id === "multiply" ? "x" : btn.innerHTML;
      } else {
        alert("Only numbers are allowed before operators!");
      }
    } else if (btn.id === "7") {
      displyOutput.value += "7";
    } else if (btn.id === "8") {
      displyOutput.value += "8";
    } else if (btn.id === "9") {
      displyOutput.value += "9";
    } else if (btn.id === "6") {
      displyOutput.value += "6";
    } else if (btn.id === "5") {
      displyOutput.value += "5";
    } else if (btn.id === "4") {
      displyOutput.value += "4";
    } else if (btn.id === "3") {
      displyOutput.value += "3";
    } else if (btn.id === "2") {
      displyOutput.value += "2";
    } else if (btn.id === "1") {
      displyOutput.value += "1";
    } else if (btn.id === "0") {
      displyOutput.value += "0";
    } else if (btn.id === "00") {
      displyOutput.value += "00";
    }
  });
});
