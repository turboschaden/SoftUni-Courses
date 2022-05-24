function deiba(arg) {
  let num = Number(arg[0]);
  let counter = 1;

  while (counter <= num) {
    console.log(counter);
    let newNum = counter * 2 + 1;
    counter = newNum;
  }
}
deiba(['31']);
