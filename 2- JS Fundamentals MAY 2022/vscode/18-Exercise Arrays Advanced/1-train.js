function train(data) {
  let wagons = data.shift().split(" ").map(Number);
  let wagonCapacity = Number(data.shift());

  for (let command of data) {
    let currentCommand = command.split(" ");
    if (currentCommand[0] === "Add") {
      wagons.push(Number(currentCommand[1]));
    } else {
      for (let index = 0; index < wagons.length; index++) {
        if (wagons[index] + Number(currentCommand[0]) <= wagonCapacity) {
          wagons[index] += Number(currentCommand);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
