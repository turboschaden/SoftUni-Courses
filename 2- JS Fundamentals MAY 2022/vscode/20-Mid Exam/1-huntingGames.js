function huntingGame(input) {
  let days = Number(input.shift());
  let playerCount = Number(input.shift());
  let groupEnergy = Number(input.shift());
  let waterPerPersonPerDay = Number(input.shift());
  let foodPerPersonPerDay = Number(input.shift());
  let totalWaterNeeded = waterPerPersonPerDay * playerCount * days;
  let totalFoodNeeded = foodPerPersonPerDay * playerCount * days;
  let dayFoodCount = 0;
  let dayFoodCound = 0;
  for (energyLost of input) {
    groupEnergy -= energyLost;
    if (groupEnergy <= 0) {
      break;
    }
    dayFoodCount++;
    if (dayFoodCount === 2) {
      groupEnergy += groupEnergy * 0.05;
      totalWaterNeeded -= totalWaterNeeded * 0.3;
      dayFoodCount = 0;
    }
    dayFoodCound++;
    if (dayFoodCound === 3) {
      totalFoodNeeded -= totalFoodNeeded / playerCount;
      groupEnergy += groupEnergy * 0.1;
      dayFoodCound = 0;
    }
  }
  if (groupEnergy > 0) {
    console.log(
      `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${totalFoodNeeded.toFixed(
        2
      )} food and ${totalWaterNeeded.toFixed(2)} water.`
    );
  }
}
huntingGame([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
huntingGame([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
