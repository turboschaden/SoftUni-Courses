function deba(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = input[2];
  let price;
  let totalPrice = price * quantity;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        price = 2.5 * quantity;
        break;
      case "apple":
        price = 1.2 * quantity;
        break;
      case "orange":
        price = 0.85 * quantity;
        break;
      case "grapefruit":
        price = 1.45 * quantity;
        break;
      case "kiwi":
        price = 2.7 * quantity;
        break;
      case "pineapple":
        console.log((5.5 * quantity).toFixed);
        break;
      case "grapes":
        price = 3.85;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        price = 2.7;
        break;
      case "apple":
        price = 1.25;
        break;
      case "orange":
        price = 0.9;
        break;
      case "grapefruit":
        price = 1.6;
        break;
      case "kiwi":
        price = 3;
        break;
      case "pineapple":
        price = 5.6;
        break;
      case "grapes":
        price = 4.2;
        break;
      default:
        console.log("error");
        break;
    }
  }
}
deba(["monday", "Saturday", "0.5"]);
