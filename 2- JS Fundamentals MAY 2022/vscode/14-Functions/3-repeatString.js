function repeat(string, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
console.log(repeat("abc", 3));
