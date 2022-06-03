function deba(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    num % 2 === 0 ? (evenSum += num) : (oddSum += num);
  }
  console.log(evenSum - oddSum);
}
deba([1, 2, 3, 4, 5, 6]);
deba([3, 5, 7, 9]);
deba([2, 4, 6, 8, 10]);
