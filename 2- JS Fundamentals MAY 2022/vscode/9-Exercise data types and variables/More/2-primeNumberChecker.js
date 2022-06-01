function prime(num) {
  if (!(num % num === 0 && num % 1 === 0)) {
    console.log(`false`);
  } else {
    console.log(`true`);
  }
}

prime(7);
prime(8);
prime(81);
