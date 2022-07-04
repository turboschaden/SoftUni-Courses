function taxCalc(input) {
  let vehicles = input.toString().split(">>");
  let revenue = 0;
  for (let vehicle of vehicles) {
    let [type, years, kilometers] = vehicle.split(" ");
    let tax = 0;
    if (type === "family") {
      tax = Math.floor(kilometers / 3000) * 12 + (50 - years * 5);
      revenue += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else if (type === "heavyDuty") {
      tax = Math.floor(kilometers / 9000) * 14 + (80 - years * 8);
      revenue += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else if (type === "sports") {
      tax = Math.floor(kilometers / 2000) * 18 + (100 - years * 9);
      revenue += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else {
      console.log("Invalid car type.");
    }
  }
  console.log(
    `The National Revenue Agency will collect ${revenue.toFixed(
      2
    )} euros in taxes.`
  );
}
taxCalc(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
taxCalc(
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012"
);
