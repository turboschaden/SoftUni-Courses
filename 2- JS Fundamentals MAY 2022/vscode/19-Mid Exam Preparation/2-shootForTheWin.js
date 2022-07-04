// https://judge.softuni.org/Contests/Practice/Index/2305#1
function shoot(input) {
  let targets = input.shift().split(" ").map(Number);
  let length = targets.length;
  let shotTargets = 0;

  for (let el of input) {
    if (el === "End") {
      console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
    }
    if (el >= 0 && el < length) {
      let currentTarget = targets[el];
      for (let i = 0; i < length; i++) {
        if (targets[i] != -1) {
          if (targets[i] > currentTarget) {
            targets[i] -= currentTarget;
          } else {
            targets[i] += currentTarget;
          }
        }
      }
      targets[el] = -1;
      shotTargets++;
    }
  }
}
shoot(["24 50 36 70", "0", "4", "3", "1", "End"]);
