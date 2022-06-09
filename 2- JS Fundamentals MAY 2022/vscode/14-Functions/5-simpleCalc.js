function calc(firstNum, secondNum, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = ((x, y) => x * y)(firstNum, secondNum);
      break;
    case "divide":
      result = ((x, y) => x / y)(firstNum, secondNum);
      break;
    case "add":
      result = ((x, y) => x + y)(firstNum, secondNum);
      break;
    case "subtract":
      result = ((x, y) => x - y)(firstNum, secondNum);
      break;
  }
  console.log(result);
}
// calc(5, 5, "multiply");
// calc(40, 8, "divide");
// calc(12, 19, "add");
calc(50, 13, "subtract");
