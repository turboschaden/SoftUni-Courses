function palindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let currentNumReversed = Number(
      currentNum.toString().split("").reverse().join("")
    );
    if (currentNum === currentNumReversed) {
      console.log(true);
    } else console.log(false);
  }
}
palindrome([123, 323, 421, 121]);
palindrome([32, 2, 232, 1010]);
