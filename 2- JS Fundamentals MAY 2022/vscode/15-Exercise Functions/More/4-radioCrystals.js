function radioCristals(arr) {
  let desiredThickness = arr[0];
  let cutCount = 0;
  let lapCount = 0;
  let grindCount = 0;
  let etchCount = 0;
  let xrayCount = 0;
  let currentChunk;
  for (let i = 1; i < arr.length; i++) {
    currentChunk = arr[i];
    console.log(`Processing chunk ${currentChunk} microns`);
    while (currentChunk != desiredThickness) {
      while (currentChunk / 4 >= desiredThickness) {
        currentChunk = cut(currentChunk);
        cutCount++;
      }
      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
      }
      while (currentChunk - currentChunk * 0.2 >= desiredThickness) {
        currentChunk = lap(currentChunk);
        lapCount++;
      }
      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log(`Transporting and washing`);
      }
      while (currentChunk - 20 >= desiredThickness) {
        currentChunk = grind(currentChunk);
        grindCount++;
      }
      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log(`Transporting and washing`);
      }
      while (currentChunk - 2 >= desiredThickness - 1) {
        currentChunk = etch(currentChunk);
        etchCount++;
      }
      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log(`Transporting and washing`);
      }
      if (currentChunk === desiredThickness - 1) {
        currentChunk = xray(currentChunk);
        xrayCount++;
        console.log(`X-ray x${xrayCount}`);
      }
    }
    console.log(`Finished crystal ${currentChunk} microns`);
    cutCount = 0;
    lapCount = 0;
    grindCount = 0;
    etchCount = 0;
    xrayCount = 0;
  }
  function cut() {
    return transportAndWash(currentChunk / 4);
  }
  function lap() {
    return transportAndWash(currentChunk * 0.8);
  }
  function grind() {
    return transportAndWash(currentChunk - 20);
  }
  function etch() {
    return transportAndWash(currentChunk - 2);
  }
  function xray() {
    return currentChunk + 1;
  }
  function transportAndWash(input) {
    return Math.floor(input);
  }
}
radioCristals([1375, 50000]);
// radioCristals([1000, 8100]);
