function deba(arr) {
  let sortedArr = arr.sort();

  for (let i = 0; i < sortedArr.length; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}
deba(["Potatoes", "Tomatoes", "Onions", "Apples"]);
