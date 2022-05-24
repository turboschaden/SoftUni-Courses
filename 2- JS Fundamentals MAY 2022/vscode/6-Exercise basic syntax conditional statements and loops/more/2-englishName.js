function deba(input) {
  let string = "";
  string += input;
  let digit = string[string.length - 1];
  switch (digit) {
    case "1":
      console.log("one");
      break;
    case "2":
      console.log("two");
      break;
    case "3":
      console.log("three");
      break;
    case "4":
      console.log("four");
      break;
    case "5":
      console.log("five");
      break;
    case "6":
      console.log("six");
      break;
    case "7":
      console.log("seven");
      break;
    case "8":
      console.log("eight");
      break;
    case "9":
      console.log("nine");
      break;
    case "0":
      console.log("zero");
      break;
  }
}
deba(511);
deba(512);
deba(514);
deba(510);
deba(516);
deba(517);
deba(51888);
