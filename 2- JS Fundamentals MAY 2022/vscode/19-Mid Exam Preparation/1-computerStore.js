// https://judge.softuni.org/Contests/Practice/Index/2517#0
function computerStore(inputData) {
  let sumWithoutTax = 0;
  let tax = 0;
  let finalSum = 0;
  for (let element of inputData) {
    if (element !== "special" && element !== "regular") {
      if (element > 0) {
        sumWithoutTax += Number(element);
      } else {
        console.log("Invalid price!");
      }
    } else if (element === "special") {
      tax = sumWithoutTax * 0.2;
      finalSum = (tax + sumWithoutTax) * 0.9;
    } else if (element === "regular") {
      tax = sumWithoutTax * 0.2;
      finalSum = tax + sumWithoutTax;
    }
  }
  if (finalSum > 0) {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${finalSum.toFixed(2)}$`);
  } else {
    console.log(`Invalid order!`);
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
