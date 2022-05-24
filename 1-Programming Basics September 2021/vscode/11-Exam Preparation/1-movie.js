function deba(input) {
  let name = input[0];
  let days = input[1];
  let tickets = input[2];
  let ticketPrice = input[3];
  let cinemaCharge = input[4];

  let totalIncome = days * tickets * ticketPrice;
  let studioIncome = totalIncome - totalIncome * cinemaCharge * 0.01;
  console.log(
    `The profit from the movie ${name} is ${studioIncome.toFixed(2)} lv.`
  );
}
deba(['The Programmer', '20', '500', '7.50', '7']);
