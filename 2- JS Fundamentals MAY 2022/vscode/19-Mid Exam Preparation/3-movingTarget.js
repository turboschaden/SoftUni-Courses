function movingTargets(input) {
  let targets = input.shift().split(" ").map(Number);
  for (let commands of input) {
    commands = commands.split(" ");
    let currentCommand = commands[0];

    if (currentCommand === "Shoot") {
      let index = Number(commands[1]);
      let power = Number(commands[2]);
      if (index >= 0 && index < targets.length) {
        targets[index] -= power;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    }
    if (currentCommand === "Add") {
      let index = Number(commands[1]);
      let value = Number(commands[2]);
      if (index < 0 || index > targets.length) {
        console.log(`Invalid placement!`);
      } else {
        targets.splice(index, 0, value);
      }
    }
    if (currentCommand === "Strike") {
      let index = Number(commands[1]);
      let radius = Number(commands[2]);
      let start = index - radius;
      let end = index + radius;
      if (start >= 0 && end < targets.length) {
        targets.splice(start, radius * 2 + 1);
      } else {
        console.log(`Strike missed!`);
      }
    }

    if (currentCommand === "End") {
      console.log(targets.join("|"));
    }
  }
}
movingTargets([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTargets(["1 2 3 4 5", "Strike 0 1", "End"]);
