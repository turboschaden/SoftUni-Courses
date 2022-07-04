function factorielDevision(firstNumber, secondNumber) {
  function factorielCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }
  let finalResult = (
    factorielCalculator(firstNumber) / factorielCalculator(secondNumber)
  ).toFixed(2);
  console.log(finalResult);
}
factorielDevision(5, 2);
