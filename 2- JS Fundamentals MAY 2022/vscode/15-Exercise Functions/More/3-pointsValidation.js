function pointsValidation(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];

  let firstDistanceForCheck = firstDistance();
  let secondDistanceForCheck = secondDistance();
  let thirdDistanceForCheck = thirdDistance();

  if (firstDistanceForCheck === Math.trunc(firstDistanceForCheck)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (secondDistanceForCheck === Math.trunc(secondDistanceForCheck)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (thirdDistanceForCheck === Math.trunc(thirdDistanceForCheck)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }

  function firstDistance() {
    return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  }
  function secondDistance() {
    return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  }
  function thirdDistance() {
    return Math.sqrt(
      Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
    );
  }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
