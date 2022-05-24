function deba(arg) {
  let username = arg[0];
  let password = arg[1];
  let data = arg[2];

  let index = 3;
  while (data != [password]) {
    data = arg[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}
deba(['Nakov', '1234', 'Pass', '1324', '1234']);
