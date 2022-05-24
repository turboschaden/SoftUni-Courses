function deba(base, increment) {
  let currentBase = base;
  let marble = 0;
  let stone = 0;
  let lapis = 0;
  let gold = 0;
  let layer = 1;
  let height = 0;
  while (currentBase > 2) {
    stone += (currentBase - 2) * (currentBase - 2) * increment;
    if (layer % 5 !== 0) {
      marble +=
        (currentBase + currentBase + currentBase + currentBase - 4) * increment;
    } else {
      lapis +=
        (currentBase + currentBase + currentBase + currentBase - 4) * increment;
    }
    layer++;
    currentBase -= 2;
  }
  gold += currentBase * currentBase * increment;
  height = layer * increment;
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
deba(11, 0.75);
