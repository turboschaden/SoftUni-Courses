function moon(input) {
  let averageSpeed = Number(input[0]);
  let fuelPer100 = Number(input[1]);

  let distance = 384400 * 2;

  let travelTime = Math.ceil(distance / averageSpeed);
  let totalTime = travelTime + 3;
  let fuelConsumption = (fuelPer100 * distance) / 100;

  console.log(Math.ceil(totalTime));
  console.log(fuelConsumption);
}

moon(['5000', '7']);
