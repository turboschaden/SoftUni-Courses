// https://judge.softuni.org/Contests/Practice/Index/1773#1
function treasureHunt(inputData) {
  let chestContents = inputData.shift().split("|");
  let sum = 0;
  for (let command of inputData) {
    let tokens = command.split(" ");
    let currentCommand = tokens.shift();
    if (currentCommand === "Yohoho!") {
      break;
    } else if (currentCommand === "Loot") {
      for (element of tokens) {
        if (!chestContents.includes(element)) {
          chestContents.unshift(element);
        }
      }
    } else if (currentCommand === "Drop") {
      let index = Number(tokens[0]);
      if (index >= 0 && index <= chestContents.length) {
        chestContents.push(chestContents[index]);
        chestContents.splice(index, 1);
      }
    } else if (currentCommand === "Steal") {
      let index = Number(tokens[0]);
      if (index >= chestContents.length) {
        index = chestContents.length;
      }
      let stolenItems = chestContents.slice(-index).join(", ");
      chestContents.splice(-index);
      console.log(stolenItems);
    }
  }
  let lengths = chestContents.map((x) => x.length);
  let gain = lengths.reduce((a, b) => a + b, 0);
  let average = gain / chestContents.length;
  if (chestContents.length === 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
