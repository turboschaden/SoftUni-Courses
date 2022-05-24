function walking(input) {
  let goal = 10000;
  let index = 0;
  let command = input[index];
  index++;
  let steps = 0;

  while (command !== 'Going home') {
    steps += Number(command);
    if (steps >= goal) {
      break;
    }
    command = input[index];
    index++;
  }

  if (command === 'Going home') {
    steps += Number(input[index]);
    index++;
  }
  let diff = Math.abs(goal - steps);

  if (steps >= goal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach the goal`);
  }
}
walking(['1000', '1500', '2000', '6500']);
walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);
