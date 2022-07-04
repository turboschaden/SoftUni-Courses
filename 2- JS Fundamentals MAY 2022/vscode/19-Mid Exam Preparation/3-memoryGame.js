function memoryGame(input) {
  let arr = input.shift().split(" ");
  let length = arr.length;
  let didWin = false;
  let moves = 0;

  for (let i = 0; i < input.length; i++) {
    moves++;
    let data = input[i].split(" ");
    let first = data[0];
    let second = data[1];
    if (first !== "end") {
      let firstSymbol = arr[first];
      let secondSymbol = arr[second];
      if (
        first < 0 ||
        first >= arr.length ||
        second < 0 ||
        second >= arr.length ||
        first === second
      ) {
        console.log(`Invalid input! Adding additional elements to the board`);
        arr.splice(arr.length / 2, 0, `-${moves}a`);
        arr.splice(arr.length / 2, 0, `-${moves}a`);
      } else if (firstSymbol === secondSymbol) {
        arr.splice(first, 1);
        if (first <= second) {
          arr.splice(second - 1, 1);
        } else {
          arr.splice(second, 1);
        }
        console.log(
          `Congrats! You have found matching elements - ${firstSymbol}!`
        );
      } else if (firstSymbol !== secondSymbol) {
        console.log(`Try again!`);
      }
      if (arr.length === 0) {
        didWin = true;
        console.log(`You have won in ${moves} turns!`);
        break;
      }
    }
  }
  if (!didWin) {
    console.log(`Sorry you lose :(`);
  }
  console.log(arr.join(" "));
}
// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
