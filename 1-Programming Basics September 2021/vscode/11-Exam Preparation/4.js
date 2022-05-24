function santa(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let s = Number(input[2]);
  let result = '';

  for (i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === s) {
        break;
      } else {
        result += i + ' ';
      }
    }
  }
  console.log(result);
}
santa(['20', '1000', '36']);
