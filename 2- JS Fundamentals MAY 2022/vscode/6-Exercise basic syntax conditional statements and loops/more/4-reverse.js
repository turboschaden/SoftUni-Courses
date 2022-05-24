function deba(input) {
  let string = "";
  for (let index = input.length - 1; index >= 0; index--) {
    string += input[index];
  }
  console.log(string);
}

deba("Hello");
