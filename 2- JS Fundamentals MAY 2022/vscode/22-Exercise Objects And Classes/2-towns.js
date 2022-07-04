function deeeba(input) {
  for (let town of input) {
    town = town.split(" | ");
    let currentTown = {
      town: town[0],
      latitude: Number(town[1]).toFixed(2),
      longitude: Number(town[2]).toFixed(2),
    };
    console.log(currentTown);
  }
}
deeeba(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
