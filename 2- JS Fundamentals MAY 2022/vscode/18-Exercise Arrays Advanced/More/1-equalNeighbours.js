function equalNeighbours(inputData) {
  let counter = 0;
  let currentRow = 1;

  for (i = 0; i < inputData.length; i++) {
    for (j = 0; j < inputData[i].length; j++) {
      let thisSymbol = inputData[i][j];
      let nextRowSymbol;
      if (currentRow < inputData.length) {
        nextRowSymbol = inputData[i + 1][j];
      }
      let rightSymbol = inputData[i][j + 1];
      if (thisSymbol === nextRowSymbol) {
        counter++;
      }
      if (thisSymbol === rightSymbol) {
        counter++;
      }
    }
    currentRow++;
  }

  console.log(counter);
}
equalNeighbours([
  ["2", "2", "5", "7", "4"],

  ["4", "0", "5", "3", "4"],

  ["2", "5", "5", "4", "2"],
]);
