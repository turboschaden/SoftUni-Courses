function printSum(n1, n2) {
  let arr = [];
  let sum = 0;
  for (i = n1; i <= n2; i++) {
    arr.push(i);
    sum += i;
  }
  console.log(...arr);
  console.log(`Sum: ${sum}`);
}
printSum(5, 10);
printSum(50, 60);
