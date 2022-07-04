function sort(inputArr) {
  let sortedArr = [];
  inputArr = inputArr.sort((a, b) => a - b);
  while (inputArr.length > 0) {
    sortedArr.push(inputArr.pop());
    sortedArr.push(inputArr.shift());
  }
  console.log(sortedArr.join(" "));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([
  34, 2, 32, 45, 690, 6, 32,

  7, 19, 47,
]);
