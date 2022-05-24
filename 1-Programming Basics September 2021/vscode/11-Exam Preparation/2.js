function processors(input) {
  let target = Number(input[0]);
  let workers = Number(input[1]);
  let workingDays = Number(input[2]);
  let targetIncome = target * 110.1;

  let totalHours = workers * workingDays * 8;

  let processorsCount = Math.floor(totalHours / 3);

  let actualIncome = processorsCount * 110.1;
  if (processorsCount < target) {
    console.log(`Losses: -> ${(targetIncome - actualIncome).toFixed(2)} BGN`);
  } else {
    console.log(`Profit: -> ${(actualIncome - targetIncome).toFixed(2)} BGN`);
  }
}
processors(['500', '8', '20']);
processors(['150', '7', '18']);
