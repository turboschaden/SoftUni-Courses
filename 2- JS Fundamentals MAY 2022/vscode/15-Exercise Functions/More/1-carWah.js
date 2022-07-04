function carWash(arr) {
  let percentage = 0;

  for (element of arr) {
    switch (element) {
      case "soap":
        percentage += 10;
        break;
      case "water":
        percentage = percentage * 1.2;
        break;
      case "vacuum cleaner":
        percentage = percentage * 1.25;
        break;
      case "mud":
        percentage = percentage * 0.9;
        break;
    }
  }
  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
