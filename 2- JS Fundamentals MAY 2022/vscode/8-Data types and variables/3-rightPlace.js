function deba(string, char, result) {
  let newString = string.replace("_", char);

  let output = newString === result ? "Matched" : "Not Matched";
  console.log(output);
}
deba(
  "Str_ng",
  "i",

  "String"
);
