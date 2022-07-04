// function sortByTwoCriteria(inputArr) {
//   inputArr = inputArr.sort((a, b) => a.length - b.length);
//   console.log(inputArr.join("\n"));
// }
function sortArray(input) {
  input.sort(twoCriteriaSort);

  input.forEach((el) => console.log(el));

  function twoCriteriaSort(cur, next) {
    if (cur.length === next.length) {
      return cur.localeCompare(next);
    }
    return cur.length - next.length;
  }
}
sortArray(["test", "Deny", "omen", "Default"]);
