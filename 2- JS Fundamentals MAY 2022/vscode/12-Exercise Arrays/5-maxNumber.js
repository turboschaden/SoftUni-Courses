function maxNum(arr) {
  let resultArray = [];
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let number1 = arr[i];
    let isLargest = true;
    for (let j = i + 1; j < arrL; j++) {
      let number2 = arr[j];
      if (number1 <= number2) {
        isLargest = false;
      }
    }
    if (isLargest) {
      resultArray.push(number1);
    }
  }
  console.log(...resultArray);
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);
