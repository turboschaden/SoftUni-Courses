function deba(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let sum = 0;
  let sumPerDay = 0;
  for (let i = 1; i <= days; i++) {
    for (let j = 1; j <= hours; j++) {
      if (i % 2 === 0 && j % 2 !== 0) {
        sum += 2.5;
        sumPerDay += 2.5;
      } else if (i % 2 !== 0 && j % 2 == 0) {
        sum += 1.25;
        sumPerDay += 1.25;
      } else {
        sum += 1;
        sumPerDay += 1;
      }
    }
    console.log(`Day: ${i} - ${sumPerDay.toFixed(2)} leva`);

    sumPerDay = 0;
  }
  console.log(`Total: ${sum.toFixed(2)} leva`);
}
deba(['2', '5']);
