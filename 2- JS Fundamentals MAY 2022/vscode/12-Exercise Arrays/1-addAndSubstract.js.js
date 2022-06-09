function deba(arr) {
  let newArr = [];
  let oldSum = 0;
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    oldSum += arr[i];
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + i);
    } else {
      newArr.push(arr[i] - i);
    }
  }
  for (let el of newArr) {
    newSum += el;
  }
  console.log(newArr);
  console.log(oldSum);
  console.log(newSum);
}
deba([5, 15, 23, 56, 35]);
