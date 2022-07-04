// function charInRange(symbol1, symbol2) {
//   let reusltArr = [];
//   let char1 = symbol1.charCodeAt(0);
//   let char2 = symbol2.charCodeAt(0);
//   if (char1 < char2) {
//     let length = char2 - char1;
//     for (let i = 1; i < length; i++) {
//       reusltArr.push(String.fromCharCode(char1 + i));
//     }
//   } else if (char1 > char2) {
//     let length = char1 - char2;
//     for (let i = 1; i < length; i++) {
//       reusltArr.push(String.fromCharCode(char2 + i));
//     }
//   }
//   console.log(...reusltArr);
// }
function charInRange(symbol1, symbol2) {
  let reusltArr = [];
  let char1 = Math.min(symbol1.charCodeAt(0), symbol2.charCodeAt(0));
  let char2 = Math.max(symbol1.charCodeAt(0), symbol2.charCodeAt(0));

  let length = char2 - char1;
  for (let i = 1; i < length; i++) {
    reusltArr.push(String.fromCharCode(char1 + i));
  }
  console.log(...reusltArr);
}
charInRange("a", "d");
charInRange("#", ":");
charInRange("C", "#");
