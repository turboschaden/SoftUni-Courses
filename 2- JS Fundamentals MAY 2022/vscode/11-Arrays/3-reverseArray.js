function reverse(n, arr) {
  newArr = [];
  reversedArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  for (let i = newArr.length - 1; i >= 0; i--) {
    reversedArr.push(newArr[i]);
  }

  console.log(...reversedArr);
}
reverse(3, [10, 20, 30, 40, 50]);
