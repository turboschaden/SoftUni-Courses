function deba(arg) {
  let targetSum = Number(arg[0]);
  let index = 1;
  let sum = 0;

  while (targetSum > sum) {
    let currentNum = Number(arg[index]);
    sum += currentNum;
    index++;
  }
  console.log(sum);
}
deba(['100', '10', '20', '30', '40']);
