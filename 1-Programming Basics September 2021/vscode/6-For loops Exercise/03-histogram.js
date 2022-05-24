function deba(arg) {
  let n = Number(arg[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 1; i <= n; i++) {
    let currentNum = Number(arg[i]);
    if (currentNum < 200) {
      p1++;
    } else if (currentNum < 400) {
      p2++;
    } else if (currentNum < 600) {
      p3++;
    } else if (currentNum < 800) {
      p4++;
    } else if (currentNum >= 800) {
      p5++;
    }
  }
  let p1Percentage = (p1 / n) * 100;
  let p2Percentage = (p2 / n) * 100;
  let p3Percentage = (p3 / n) * 100;
  let p4Percentage = (p4 / n) * 100;
  let p5Percentage = (p5 / n) * 100;

  console.log(p1Percentage.toFixed(2) + '%');
  console.log(p2Percentage.toFixed(2) + '%');
  console.log(p3Percentage.toFixed(2) + '%');
  console.log(p4Percentage.toFixed(2) + '%');
  console.log(p5Percentage.toFixed(2) + '%');
}

deba([
  '14',
  '53',
  '7',
  '56',
  '180',
  '450',
  '920',
  '12',
  '7',
  '150',
  '250',
  '680',
  '2',
  '600',
  '200',
]);
