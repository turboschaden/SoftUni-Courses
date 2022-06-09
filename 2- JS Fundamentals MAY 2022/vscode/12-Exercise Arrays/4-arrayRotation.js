function arrayRotation(arr, rotations) {
  let resultArray = arr;
  while (rotations > 0) {
    let element = resultArray.shift();
    resultArray.push(element);
    rotations--;
  }
  console.log(...resultArray);
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
