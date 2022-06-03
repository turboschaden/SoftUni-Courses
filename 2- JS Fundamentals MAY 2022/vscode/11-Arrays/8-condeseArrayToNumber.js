function condense(arr) {
  result = [...arr];
  while (result.length > 1) {
    let tempArr = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArr[i] = result[i] + result[i + 1];
    }
    result = tempArr;
  }

  console.log(result.join());
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
