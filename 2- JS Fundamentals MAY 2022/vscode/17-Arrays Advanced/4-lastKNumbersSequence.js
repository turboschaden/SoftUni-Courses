function deba(n, k) {
  let resultArr = [1];
  for (let i = 0; i < n - 1; i++) {
    let elements = resultArr.slice(-k);
    let sum = 0;
    for (let n of elements) {
      sum += n;
    }
    resultArr.push(sum);
  }
  console.log(...resultArr);
}

deba(6, 3);
