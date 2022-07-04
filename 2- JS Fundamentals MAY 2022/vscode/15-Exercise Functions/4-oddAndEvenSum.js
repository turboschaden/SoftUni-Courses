function oddAndEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;
  for (let element of inputToString(number)) {
    if (element % 2 === 0) {
      evenSum += Number(element);
    } else {
      oddSum += Number(element);
    }
  }

  function inputToString(input) {
    return input.toString();
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
