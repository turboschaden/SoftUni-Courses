function bombNum(array, bomb) {
  let bombNum = bomb[0];
  let power = bomb[1];

  let bombIndex = array.indexOf(bombNum);
  while (bombIndex !== -1) {
    let startExplosionIndex = Math.max(0, bombIndex - power);
    let explosionLength = power * 2 + 1;
    array.splice(startExplosionIndex, explosionLength);
    bombIndex = array.indexOf(bombNum);
  }
  let sum = array.reduce((a, b) => a + b, 0);
  console.log(sum);
}
bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNum([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNum([1, 7, 7, 1, 2, 3], [7, 1]);
bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
