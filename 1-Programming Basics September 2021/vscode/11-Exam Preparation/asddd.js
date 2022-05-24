function cal(input) {
  const days = input[0];
  let index = 1;
  for (let i = 1; i <= days; i++) {
    let gold = 0;
    const averGoldPerDay = Number(input[index]);
    index++;
    const numDays = Number(input[index]);

    for (let j = 1; j <= numDays; j++) {
      index++;
      gold += Number(input[index]);
    }
    const realGoldPerDay = gold / numDays;
    if (realGoldPerDay >= averGoldPerDay) {
      console.log(
        `Good job! Average gold per day: ${realGoldPerDay.toFixed(2)}.`
      );
    } else {
      console.log(
        `You need ${(averGoldPerDay - realGoldPerDay).toFixed(2)} gold.`
      );
    }
    index++;
  }
}
cal(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);
