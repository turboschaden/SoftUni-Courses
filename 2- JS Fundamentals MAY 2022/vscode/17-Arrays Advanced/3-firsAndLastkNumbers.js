function deba(arr) {
  let kNum = arr.shift();
  console.log(...arr.slice(0, kNum));
  console.log(...arr.slice(-kNum));
}
deba([2, 7, 8, 9]);
