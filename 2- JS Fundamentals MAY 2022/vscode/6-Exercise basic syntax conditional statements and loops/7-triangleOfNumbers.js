function triangle(n) {
  for (i = 1; i <= n; i++) {
    let arr = [];
    for (u = 0; u < i; u++) {
      arr.push(i);
    }
    console.log(...arr);
  }
}
triangle(6);
