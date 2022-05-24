function deba(input) {
  index = 0;
  people = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let sumGrade = 0;

  while (command !== 'Finish') {
    let name = command;
    let tempGrade = 0;
    for (let i = 0; i < people; i++) {
      tempGrade = Number(input[index]);
      index++;
    }
    let avgTempGrade = tempGrade / people;
    console.log(`${name} - ${avgTempGrade}`);
  }
}

deba(['2', 'While-Loop', '6.00', '5.50', 'For-Loop', '5.84', '5.66', 'Finish']);
