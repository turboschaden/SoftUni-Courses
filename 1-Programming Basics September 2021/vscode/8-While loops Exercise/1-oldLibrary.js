function deba(input) {
  book = input[0];
  let bookFound = false;
  let index = 1;
  let currentBook = input[index];

  while (currentBook !== 'No More Books') {
    if (currentBook === book) {
      bookFound = true;
      break;
    }
    index++;
    currentBook = input[index];
  }
  if (bookFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}
deba([
  'Bourne',
  'True Story',
  'Forever',
  'More Space',
  'The Girl',
  'Spaceship',
  'Strongest',
  'Profit',
  'Tripple',
  'Stella',
  'The Matrix',
  'Bourne',
]);
