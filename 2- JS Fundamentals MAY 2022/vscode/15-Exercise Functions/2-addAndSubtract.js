function addAndSubtract(n1, n2, n3) {
  function add(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  let subtract = (addResult, thirdNumber) => addResult - thirdNumber;
  let result = add(n1, n2);
  let finalResult = subtract(result, n3);
  console.log(finalResult);
}
addAndSubtract(23, 6, 10);
