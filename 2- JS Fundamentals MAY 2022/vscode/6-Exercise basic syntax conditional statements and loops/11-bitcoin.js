function deba(arr) {
  let day = 0;

  let money = 0;
  let bitcoin = 0;
  let sumBitcoins = 0;
  let firstBitcoin = 0;

  for (i = 0; i < arr.length; i++) {
    let gold = arr[i];
    let dailyMoney = gold * 67.51;
    day += 1;
    if (day % 3 !== 0) {
      money += dailyMoney;
    } else {
      money += dailyMoney * 0.7;
    }
    if (money >= 11949.16) {
      bitcoin += Math.floor(money / 11949.16);
      money = money - bitcoin * 11949.16;
      console.log(bitcoin);
      money -= bitcoin * 11949.16;
      if (firstBitcoin < 1) {
        firstBitcoin = day;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoin}`);
  console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

deba([3124.15, 504.212, 2511.124]);
