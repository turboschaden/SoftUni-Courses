function presents(input) {
  let index = 0;
  let command = input[index];
  let kids = 0;
  let adults = 0;

  while (command != 'Christmas') {
    if (command <= 16) {
      kids++;
    } else {
      adults++;
    }
    index++;
    command = input[index];
  }
  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${kids * 5}`);
  console.log(`Money for sweaters: ${adults * 15}`);
}
presents(['16', '16', '16', '16', '16', 'Christmas']);
