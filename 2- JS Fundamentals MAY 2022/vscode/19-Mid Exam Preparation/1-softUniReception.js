// https://judge.softuni.org/Contests/Practice/Index/2474#0.
function reception(data) {
  data = data.map(Number);
  let firstEmployee = data[0];
  let secondEmployee = data[1];
  let thirdEmployee = data[2];
  let totalEfficiency = firstEmployee + secondEmployee + thirdEmployee;
  let students = data[3];
  let hours = 0;
  let counter = 0;
  while (students > 0) {
    if (counter === 3) {
      hours++;
      counter = 0;
    } else {
      students -= totalEfficiency;
      hours++;
      counter++;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
reception(["5", "6", "4", "20"]);
reception(["1", "2", "3", "45"]);
