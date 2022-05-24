function deba(arr) {
  let tournamentCount = Number(arr.shift());
  let startScore = Number(arr.shift());
  let currentScore = 0;
  let tournamentsWon = 0;

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === 'W') {
      currentScore += 2000;
      tournamentsWon += 1;
    } else if (arr[i] === 'F') {
      currentScore += 1200;
    } else if (arr[i] === 'SF') {
      currentScore += 720;
    }
  }

  console.log(`Final points: ${startScore + currentScore}`);
  console.log(`Average points: ${Math.floor(currentScore / tournamentCount)}`);
  console.log(`${((tournamentsWon / tournamentCount) * 100).toFixed(2)}%`);
}
deba(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W']);
