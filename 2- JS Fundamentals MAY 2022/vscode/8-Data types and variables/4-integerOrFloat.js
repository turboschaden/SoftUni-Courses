function deba(n1, n2, n3) {
  let sum = n1 + n2 + n3;
  let output = sum % 1 === 0 ? "Integer" : "Float";
  console.log(`${sum} - ${output}`);
}
deba(9, 100, 1.1);
deba(100, 200, 303);
