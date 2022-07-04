function deba(input) {
  let pirateShipStatus = input.shift().split(">").map(Number);
  let warShipStatus = input.shift().split(">").map(Number);
  let warShipStatusLength = warShipStatus.length;
  let pirateShipStatusLength = pirateShipStatus.length;
  let maxHealth = Number(input.shift());
  let battleOver = false;

  for (command of input) {
    if (!battleOver) {
      command = command.split(" ");
      let currentCommand = command[0];

      if (currentCommand === "Retire") {
        break;
      } else if (currentCommand === "Fire") {
        let index = Number(command[1]);
        let damage = Number(command[2]);

        if (validIndex(index, warShipStatusLength)) {
          warShipStatus[index] -= damage;
          if (warShipStatus[index] <= 0) {
            battleOver = true;
            console.log(`You won! The enemy ship has sunken.`);
            break;
          }
        }
      } else if (currentCommand === "Defend") {
        let startIndex = Number(command[1]);
        let endIndex = Number(command[2]);
        let damage = Number(command[3]);

        if (
          validIndex(startIndex, pirateShipStatusLength) &&
          validIndex(endIndex, pirateShipStatusLength)
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            let damagedSectionHealth = pirateShipStatus[i] - damage;
            if (damagedSectionHealth <= 0) {
              battleOver = true;
              console.log("You lost! The pirate ship has sunken.");
              break;
            } else {
              pirateShipStatus[i] = damagedSectionHealth;
            }
          }
        }
      } else if (currentCommand === "Repair") {
        let index = Number(command[1]);
        let health = Number(command[2]);

        if (validIndex(index, warShipStatusLength)) {
          let newHealth = pirateShipStatus[index] + health;
          if (newHealth < maxHealth) {
            pirateShipStatus[index] = newHealth;
          } else {
            pirateShipStatus[index] = maxHealth;
          }
        }
      } else if (currentCommand === "Status") {
        let sectionForRepair = 0;
        for (section of pirateShipStatus) {
          if (section < maxHealth * 0.2) {
            sectionForRepair++;
          }
        }
        console.log(`${sectionForRepair} sections need repair.`);
      }
    }
  }
  if (!battleOver) {
    let pirateShipSum = pirateShipStatus.reduce((a, b) => a + b);
    let warShipSum = warShipStatus.reduce((a, b) => a + b);
    console.log(
      `Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`
    );
  }
  function validIndex(index, arrayLength) {
    return index < 0 || index > arrayLength - 1 ? false : true;
  }
}

// deba([
//   "12>13>11>20>66",
//   "12>22>33>44>55>32>18",
//   "70",
//   "Fire 2 11",
//   "Fire 8 100",
//   "Defend 3 6 11",
//   "Defend 0 3 5",
//   "Repair 1 33",
//   "Status",
// ]);
deba([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
