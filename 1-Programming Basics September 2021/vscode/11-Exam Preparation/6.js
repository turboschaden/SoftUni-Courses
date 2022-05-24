function goldMine(input) {
  let locations = Number(input.shift());

  let sumExtraction = 0;
  console.log(input);

  for (i = 1; i <= locations; i++) {
    let index = 0;
    let avrExtr = Number(input[index]);
    index++;
    let days = Number(input[index]);

    for (j = 1; j <= days; j++) {
      console.log(i, j);
    }
  }
}
goldMine(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);
