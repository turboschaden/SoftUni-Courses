function numberSearch(arr, commands) {
  let newLength = commands[0];
  let elementsToDelete = commands[1];
  let numberToSearchFor = commands[2];
  let newArr = arr.slice(0, newLength);
  newArr.splice(0, elementsToDelete);
  let counter = 0;
  for (element of newArr) {
    if (element === numberToSearchFor) {
      counter++;
    }
  }
  console.log(`Number ${numberToSearchFor} occurs ${counter} times.`);
}
numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
numberSearch([7, 1, 5, 8, 2, 7], [3, 1, 5]);
