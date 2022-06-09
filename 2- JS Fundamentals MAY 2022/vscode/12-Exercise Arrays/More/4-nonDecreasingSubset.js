function deba(arr) {
  let currentNum = arr[0];
  let resultArr = [currentNum];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= currentNum) {
      currentNum = arr[i];
      resultArr.push(currentNum);
    }
  }
  console.log(...resultArr);
}
deba([1, 3, 8, 4, 10, 12, 3, 2, 24]);
