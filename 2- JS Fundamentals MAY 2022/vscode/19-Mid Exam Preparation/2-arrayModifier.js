// https://judge.softuni.org/Contests/Practice/Index/2474#1
function arrayModifier(inputData) {
  let array = inputData.shift().split(" ").map(Number);
  for (let el of inputData) {
    let currentInstructions = el.split(" ");
    let command = currentInstructions[0];
    let firstIndex = Number(currentInstructions[1]);
    let secondIndex = Number(currentInstructions[2]);

    if (command === "swap") {
      let temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    } else if (command === "multiply") {
      let firstNum = array[firstIndex];
      let secondNum = array[secondIndex];
      array[firstIndex] = firstNum * secondNum;
    } else if (command === "decrease") {
      array = array.map((x) => x - 1);
    } else if (command === "end") {
      break;
    }
  }
  console.log(array.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
