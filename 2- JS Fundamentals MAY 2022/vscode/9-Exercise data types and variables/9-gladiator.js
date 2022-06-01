function gladiator(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let lostGameCounter = 0;
  let brokenShieldCounter = 0;

  for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
    lostGameCounter++;
    if (lostGameCounter % 2 === 0) {
      expenses += helmetPrice;
    }
    if (lostGameCounter % 3 === 0) {
      expenses += swordPrice;
    }
    if (lostGameCounter % 6 === 0) {
      expenses += shieldPrice;
      brokenShieldCounter++;
      if (brokenShieldCounter % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.5, 21.5, 40, 200);
