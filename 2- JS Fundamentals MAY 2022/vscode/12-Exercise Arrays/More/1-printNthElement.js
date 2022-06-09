function deba(arr) {
  let el = Number(arr[arr.length - 1]);
  resultArr = [];

  for (let i = 0; i < arr.length; i += el) {
    resultArr.push(arr[i]);
  }
  console.log(...resultArr);
}
deba(["5", "20", "31", "4", "20", "2"]);
