function deba(input) {
  let budget = Number(input[0]);
  let stay = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let extraCosts = budget * Number(input[3] * 0.01);
  if (stay > 7) {
    pricePerNight -= pricePerNight * 0.05;
  }

  let stayCost = pricePerNight * stay;
  let totalCost = stayCost + extraCosts;

  if (totalCost <= budget) {
    console.log(
      `Ivanovi will be left with ${(budget - totalCost).toFixed(
        2
      )} leva after vacation.`
    );
  } else {
    console.log(`${(totalCost - budget).toFixed(2)} leva needed.`);
  }
}
deba(['500', '7', '66', '15']);
