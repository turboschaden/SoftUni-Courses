function negativeOrPostive(arr) {
  arr = arr.map(Number);
  let resultArr = [];
  for (element of arr) {
    if (element >= 0) {
      resultArr.push(element);
    } else {
      resultArr.unshift(element);
    }
  }
  for (element of resultArr) {
    console.log(element);
  }
}
negativeOrPostive(["7", "-2", "8", "9"]);
negativeOrPostive(["3", "-2", "0", "-1"]);
