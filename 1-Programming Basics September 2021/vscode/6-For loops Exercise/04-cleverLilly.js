function deba(arg) {
  let age = Number(arg[0]);
  let washerPrice = Number(arg[1]);
  let pricePerToy = Number(arg[2]);

  let sum = 0;
  let toyCount = 0;
  let moneyCount = 0;
  let moneyPerBirthday = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneyCount += moneyPerBirthday;
      moneyCount--;
      moneyPerBirthday += 10;
    } else {
      toyCount++;
    }
  }
  sum = toyCount * pricePerToy + moneyCount;
  if (sum >= washerPrice) {
    console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
  } else console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
}
deba(['10', '170.00', '6']);
