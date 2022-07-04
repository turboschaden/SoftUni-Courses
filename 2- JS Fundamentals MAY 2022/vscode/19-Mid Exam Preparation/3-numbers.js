function numbers(nums) {
  nums = nums.split(" ").map(Number);
  let sum = nums.reduce((a, b) => a + b, 0);
  let average = sum / nums.length;
  let resultArr = nums.filter((x) => x > average);
  resultArr.sort((a, b) => b - a);

  if (resultArr.length > 5) {
    console.log(resultArr.slice(0, 5).join(" "));
  } else if (resultArr.length === 0) {
    console.log(`No`);
  } else {
    console.log(resultArr.join(" "));
  }
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
