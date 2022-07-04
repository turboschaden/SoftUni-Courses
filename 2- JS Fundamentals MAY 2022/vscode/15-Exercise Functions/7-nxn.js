function nxn(num) {
  rowArr = [];
  for (let i = 0; i < num; i++) {
    rowArr.push(num);
  }
  for (let j = 0; j < num; j++) {
    console.log(...rowArr);
  }
}
nxn(3);
