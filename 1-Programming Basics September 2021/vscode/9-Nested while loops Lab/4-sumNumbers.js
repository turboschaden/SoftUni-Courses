function deba(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let magicN = Number(input[2]);
  let counter = 0;

  for (let i = n1; i <= n2; i++) {
    for (let j = n1; j <= n2; j++) {
      counter++;
      if (i + j === magicN) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicN})`);
        return;
      }
    }
  }
  console.log(`${counter} combinations - neither equals ${magicN}`);
}
deba(['1', '10', '5']);
deba(['88', '888', '1000']);
deba(['88', '888', '2000']);
