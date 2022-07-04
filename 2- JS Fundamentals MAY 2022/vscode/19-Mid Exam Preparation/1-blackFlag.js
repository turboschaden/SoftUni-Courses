function bunnyKill(arr) {
  let bombCells = arr
    .pop()
    .split(" ")
    .map((x) => x.split(",").map(Number));
  console.log(bombCells);
  console.log(arr);
  let matrix = arr.map((x) => x.split(" ").map((x) => Number(x)));
  console.log(matrix[0]);
}
bunnyKill([
  "5 10 15 20",

  "10 10 10 10",

  "10 15 10 10",

  "10 10 10 10",

  "2,2 0,1",
]);
