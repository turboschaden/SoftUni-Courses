function deba(arg) {
  let inputElement = arg[0];
  let index = 1;
  let currentNum = arg[index];
  let min = Number.MAX_SAFE_INTEGER;

  while (inputElement !== 'Stop') {
    let currentNum = Number(inputElement);
    if (currentNum < min) {
      min = currentNum;
      inputElement = arg[index];
      index++;
    }
  }
  console.log(min);
}

deba(['-10', '20', '-30', 'Stop']);
