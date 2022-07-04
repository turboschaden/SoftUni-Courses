function arrayManipulation(data) {
  let arr = data.shift().split(" ").map(Number);
  for (let i = 0; i < data.length; i++) {
    let [command, firstNum, secondNum] = data[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
      case "Add":
        arr.push(firstNum);
        break;
      case "Remove":
        arr = arr.filter((x) => x !== firstNum);
        break;
      case "RemoveAt":
        arr.splice(firstNum, 1);
        break;
      case "Insert":
        arr.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(...arr);
}
// arrayManipulation([
//   "4 19 2 53 6 43",
//   "Add 3",
//   "Remove 2",
//   "RemoveAt 1",
//   "Insert 8 3",
// ]);
arrayManipulation([
  "6 12 2 65 6 42",

  "Add 8",

  "Remove 12",

  "RemoveAt 3",

  "Insert 6 2",
]);
