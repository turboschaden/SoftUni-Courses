// https://judge.softuni.org/Contests/Practice/Index/2305#0
function cs(input) {
  let battlesWon = 0;
  let health = Number(input.shift());
  for (const commands of input) {
    if (commands !== "End of battle") {
      let energy = Number(commands);
      if (health - energy < 0) {
        console.log(
          `Not enough energy! Game ends with ${battlesWon} won battles and ${health} energy`
        );
        return;
      }
      health -= energy;
      battlesWon++;
    } else {
      console.log(`Won battles: ${battlesWon}. Energy left: ${health}`);
    }
    if (battlesWon % 3 === 0) {
      health += battlesWon;
    }
  }
}
cs(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
cs(["200", "54", "14", "28", "13", "End of battle"]);
