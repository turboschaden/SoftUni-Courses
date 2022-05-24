function deba(input) {
  let num = Number(input[0]);

  console.log((num >= 100 && num <= 200) || num === 0 ? "" : "invalid");
}
deba(["75"]);
