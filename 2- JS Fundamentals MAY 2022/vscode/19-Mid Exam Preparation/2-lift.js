function lift(input) {
  let people = Number(input[0]);
  let state = input[1].split(" ").map(Number);
  let stateLength = state.length;
  for (let i = 0; i < stateLength; i++) {
    if (people > 0) {
      let currentWagon = state[i];
      if (currentWagon < 4) {
        while (currentWagon !== 4) {
          currentWagon++;
          people--;
          if (people === 0) {
            break;
          }
        }
      }
      state[i] = currentWagon;
    }
  }
  let isFull = state.filter((w) => w !== 4);

  if (isFull.length === 0 && people === 0) {
    console.log(`${state.join(" ")}`);
  } else if (isFull.length !== 0) {
    console.log(`The lift has empty spots!`);
    console.log(`${state.join(" ")}`);
  } else {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${state.join(" ")}`);
  }
}
lift(["15", "0 0 0 0 0"]);
lift(["20", "0 2 0"]);
