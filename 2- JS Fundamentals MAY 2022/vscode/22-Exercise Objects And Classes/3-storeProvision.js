function daeba(storeStock, orderedStock) {
  let stockObject = {};
  for (let i = 0; i < storeStock.length - 1; i += 2) {
    let currentItem = storeStock[i];
    let quantity = Number(storeStock[i + 1]);
    stockObject[currentItem] = quantity;
  }

  for (let i = 0; i < orderedStock.length - 1; i += 2) {
    let currentItem = orderedStock[i];
    let quantity = Number(orderedStock[i + 1]);

    if (stockObject[currentItem] == undefined) {
      stockObject[currentItem] = quantity;
    } else {
      stockObject[currentItem] += quantity;
    }
  }
  for (let entry of Object.entries(stockObject)) {
    console.log(entry.join(" -> "));
  }
}

daeba(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
