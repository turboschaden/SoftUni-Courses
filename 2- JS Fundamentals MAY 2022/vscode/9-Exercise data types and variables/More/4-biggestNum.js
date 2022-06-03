function biggestNum(x, y, z) {
  max_val = 0;
  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  console.log(max);
}
biggestNum(
  -2,

  7,

  3
);
