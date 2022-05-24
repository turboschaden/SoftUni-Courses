function deba(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let command = input[index];
  let bill = 0;
  let items = 0;
  let counter = 0;
  while (command !== 'Stop') {
    index++;
    let itemPrice = Number(input[index]);
    counter++;
    if (counter % 3 === 0) {
      itemPrice = itemPrice / 2;
    }
    budget = budget - itemPrice;

    if (budget < 0) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
      break;
    } else {
      bill += itemPrice;
      items++;
    }
    index++;
    command = input[index];
  }
  if (command === 'Stop') {
    console.log(`You bought ${items} products for ${bill.toFixed(2)} leva.`);
  }
}
// deba([
//   '153.20',
//   'Backpack',
//   '25.20',
//   'Shoes',
//   '54',
//   'Sunglasses',
//   '30',
//   'Stop',
// ]);

deba(['54', 'Thermal underwear', '24', 'Sunscreen', '45']);
