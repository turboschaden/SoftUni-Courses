function deba(input) {
  let inp = input[0];
  let sum = 0;

  for (let i = 0; i < inp.length; i++) {
    sum += Number(inp[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}
deba(['564891']);
