function deba(arr) {
  arr = arr.map(Number);
  let first = arr.shift();
  let last = arr.pop();
  console.log(first + last);
}
deba(["20", "30", "40"]);
