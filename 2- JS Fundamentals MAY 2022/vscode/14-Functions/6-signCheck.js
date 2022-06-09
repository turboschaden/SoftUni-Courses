function deba(n1, n2, n3) {
  if (negativeCheck(n1, n2, n3) % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
  function negativeCheck(n1, n2, n3) {
    let negativeNumbers = 0;
    if (n1 < 0) negativeNumbers += 1;
    if (n2 < 0) negativeNumbers += 1;
    if (n3 < 0) negativeNumbers += 1;
    return negativeNumbers;
  }
}

deba(-6, -12, 14);
