function bar(num) {
  let arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  for (let i = 0; i < num / 10; i++) {
    arr[i] = "%";
  }
  if (num / 10 < 10) {
    console.log(`${num}% [${arr.join("")}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100% Complete!`);
  }
}
bar(100);
