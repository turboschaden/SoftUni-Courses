function salary(arg) {
  let tabs = Number(arg.shift());
  let salary = Number(arg.shift());
  let salaryLeft = salary;

  for (let i = 0; i < tabs; i++) {
    let site = arg[i];
    if (site === 'Facebook') {
      salaryLeft -= 150;
    } else if (site === 'Instagram') {
      salaryLeft -= 100;
    } else if (site === 'Reddit') {
      salaryLeft -= 50;
    }
  }
  if (salaryLeft <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(Math.trunc(salaryLeft));
  }
}
salary(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg']);
