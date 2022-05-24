function deba(input) {
  let days = Number(input[0]);
  let type = input[1];
  let score = input[2];

  let nights = days - 1;
  let pricePerNight;
  if (type === 'room for one person') {
    pricePerNight = 18;
  } else if (type === 'apartment') {
    if (nights < 10) {
      pricePerNight = 25 - 25 * 0.3;
    } else if (nights >= 10 && nights < 15) {
      pricePerNight = 25 - 25 * 0.35;
    } else if (nights >= 15) {
      pricePerNight = 25 - 25 * 0.5;
    }
  } else if (type === 'president apartment') {
    if (nights < 10) {
      pricePerNight = 35 - 35 * 0.1;
    } else if (nights >= 10 && nights < 15) {
      pricePerNight = 35 - 35 * 0.15;
    } else if (nights >= 15) {
      pricePerNight = 35 - 35 * 0.2;
    }
  }
  if (score === 'positive') {
    console.log(((pricePerNight + pricePerNight * 0.25) * nights).toFixed(2));
  } else if (score === 'negative') {
    console.log(((pricePerNight - pricePerNight * 0.1) * nights).toFixed(2));
  }
}
deba(['30', 'president apartment', 'negative']);
