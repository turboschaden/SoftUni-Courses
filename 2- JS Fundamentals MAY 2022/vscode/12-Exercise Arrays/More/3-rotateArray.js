function rotateArray(arr) {
  let rotations = Number(arr.pop());
  resultArr = arr;

  for (let i = 0; i < rotations; i++) {
    resultArr.unshift(arr.pop());
  }

  console.log(...resultArr);
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
