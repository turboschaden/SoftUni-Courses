function deba(arr) {
  let groupCount = arr.shift();
  let mussala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] <= 5) {
      mussala += Number(arr[i]);
    } else if (arr[i] >= 6 && arr[i] < 13) {
      monblan += Number(arr[i]);
    } else if (arr[i] >= 13 && arr[i] < 26) {
      kilimandjaro += Number(arr[i]);
    } else if (arr[i] >= 26 && arr[i] < 41) {
      k2 += Number(arr[i]);
    } else if (arr[i] >= 41) {
      everest += Number(arr[i]);
    }
  }
  let totalPeople = mussala + monblan + kilimandjaro + k2 + everest;

  musalaPercentage = groupCount;
  console.log(`${((mussala / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblan / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimandjaro / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalPeople) * 100).toFixed(2)}%`);
}
deba(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
