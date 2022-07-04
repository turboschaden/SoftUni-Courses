function buildWall(inputArr) {
  inputArr = inputArr.map(Number);
  let workingCrews = inputArr.filter((length) => length < 30).length;
  let dailyConcrete = [];
  let totalConcrete = 0;
  let totalConcretePrice = 0;
  while (workingCrews > 0) {
    let dailyConcreteTotal = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] < 30) {
        inputArr[i]++;
        dailyConcreteTotal += 195;
        if (inputArr[i] == 30) {
          workingCrews--;
        }
      }
    }
    dailyConcrete.push(dailyConcreteTotal);
    totalConcrete += dailyConcreteTotal;
  }
  totalConcretePrice = totalConcrete * 1900;
  console.log(dailyConcrete.join(", "));
  console.log(`${totalConcretePrice} pesos`);
}
buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);
