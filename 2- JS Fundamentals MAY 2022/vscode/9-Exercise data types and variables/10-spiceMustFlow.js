function spice(startYeld) {
  let days = 0;
  let spicesExtracted = 0;

  while (startYeld >= 100) {
    days++;
    spicesExtracted += startYeld - 26;
    startYeld -= 10;
  }
  console.log(days);
  if (days !== 0) console.log(spicesExtracted - 26);
  else console.log(spicesExtracted);
}
spice(111);
