function daEba(inputArray) {
  let resultArray = [];
  for (element of inputArray) {
    if (!resultArray.includes(element)) {
      resultArray.push(element);
    }
  }
  console.log(resultArray.join(" "));
}
daEba([7, 8, 9, 7, 2, 3, 4, 1, 2]);
