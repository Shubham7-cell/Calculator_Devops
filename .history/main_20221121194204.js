// import files
console.log("hhhhhh");
import add from "./calculator/add";
import subtract from "./calculator/subtract";
import multiply from "./calculator/multiply";
import divide from "./calculator/divide";

window.onload = function () {
  document.getElementById("calculateBtn").addEventListener("click", calculate);
};

function calculate() {
  var firstNum = parseInt(document.getElementById("firstnumber").value);
  var secondNum = parseInt(document.getElementById("secondnumber").value);
  var operator = document.getElementById("operator").value;
  var resultElm = document.getElementById("result");
  var result;

  try {
    switch (operator) {
      case "add":
        result = add(firstNum, secondNum);
        console.log(result);
        break;
      case "subtract":
        result = subtract(firstNum, secondNum);
        break;
      case "multiply":
        result = multiply(firstNum, secondNum);
        break;
      case "divide":
        result = divide(firstNum, secondNum);
        break;
      default:
        alert("Error!");
        break;
    }
    resultElm.textContent = "Result: " + result;
    resultElm.style.color = "black";
  } catch (error) {
    resultElm.textContent = "Error: " + error.message;
    resultElm.style.color = "red";
  }
}
