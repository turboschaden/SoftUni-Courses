function deba(arg) {
  // for (i = 0; i <= arg.length; i++) {
  //   if (arg[i] !== 'Stop') {
  //     console.log(arg[i]);
  //   } else continue;
  // }
  let index = 0;
  let currentWord = arg[index];
  while (currentWord != 'Stop') {
    console.log(currentWord);
    index += 1;
    currentWord = arg[index];
  }
}
deba([
  'Nakov',
  'SoftUni',
  'Sofia',
  'Bulgaria',
  'SomeText',
  'Stop',
  'AfterStop',
  'Europe',
  'HelloWorld',
]);
