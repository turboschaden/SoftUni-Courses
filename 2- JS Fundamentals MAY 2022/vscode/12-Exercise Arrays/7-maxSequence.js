function deba(arr) {
  let maxSequence = [];

  for (i = 0; i < arr.length; i++) {
    let currentSequence = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[i]);
      } else {
        break;
      }
    }
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }
  console.log(...maxSequence);
}
deba([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
