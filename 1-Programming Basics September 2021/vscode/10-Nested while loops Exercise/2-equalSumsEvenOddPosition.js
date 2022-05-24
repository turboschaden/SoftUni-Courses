function deba(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let output = '';

  for (let i = startNumber; i <= endNumber; i++) {
    let evenSum = 0;
    let oddSum = 0;
    let numToString = i + '';
    for (let index = 0; index < numToString.length; index++) {
      if (index % 2 === 0) {
        evenSum += Number(numToString[index]);
      } else {
        oddSum += Number(numToString[index]);
      }
    }
    if (evenSum === oddSum) {
      output += numToString + ' ';
    }
  }
  console.log(output);
}

deba(['123456', '124000']);
