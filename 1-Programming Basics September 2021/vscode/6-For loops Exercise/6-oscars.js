function oscars(input) {
  let actor = input.shift();
  let academyPoints = Number(input.shift());
  let n = Number(input.shift());
  let addedScore = academyPoints;

  for (i = 0; i <= n + 2; i += 2) {
    addedScore += (input[i].length * Number(input[i + 1])) / 2;
  }
  if (addedScore > 1250.5) {
    console.log(
      `Congratulations, ${actor} got a nominee for leading role with ${addedScore.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actor} you need ${1250.5 - addedScore.toFixed(1)} more!`
    );
  }
}
oscars([
  'Sandra Bullock',
  '340',
  '5',
  'Robert De Niro',
  '50',
  'Julia Roberts',
  '40.5',
  'Daniel Day-Lewis',
  '39.4',
  'Nicolas Cage',
  '29.9',
  'Stoyanka Mutafova',
  '33',
]);
