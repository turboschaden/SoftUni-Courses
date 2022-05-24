function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quantity = Number();
  let result = 0;
  if (town === "Sofia") {
    switch (product) {
      case "coffee":
        result = quantity * 0.5;
        break;
      case "water":
        result = quantity * 0.8;
        break;
      case "beer":
        result = quantity * 1.2;
        break;
      case "sweets":
        result = quantity * 1.45;
        break;
      case "peanuts":
        result = quantity * 1.6;
        break;
    }
  } else if (town === "Plovdiv") {
    switch (product) {
      case "coffee":
        result = quantity * 0.4;
        break;
      case "water":
        result = quantity * 0.7;
        break;
      case "beer":
        result = quantity * 1.15;
        break;
      case "sweets":
        result = quantity * 1.3;
        break;
      case "peanuts":
        result = quantity * 1.5;
        break;
    }
  } else {
    switch (product) {
      case "coffee":
        result = quantity * 0.45;
        break;
      case "water":
        result = quantity * 0.7;
        break;
      case "beer":
        result = quantity * 1.1;
        break;
      case "sweets":
        result = quantity * 1.35;
        break;
      case "peanuts":
        result = quantity * 1.55;
        break;
    }
  }
  console.log(result);
}
