function numberMod(num) {
  numToString = num.toString();
  let average;
  while (averageCalc() <= 5) {
    numToString += "9";
  }
  console.log(numToString);

  function averageCalc() {
    let sum = 0;
    let count = 0;
    for (element of numToString) {
      sum += Number(element);
      count++;
    }
    average = sum / count;
    return average;
  }
}

numberMod(101);
numberMod(5835);
