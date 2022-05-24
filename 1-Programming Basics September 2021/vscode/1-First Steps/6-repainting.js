function sum(input) {
    let nailonQuantity = Number(input[0]) + 2;
    let paintQuantity = Number(input[1]) + Number(input[1]) * 10 / 100;
    let solventQuantity = Number(input[2]);
    let hoursQuantity = Number(input[3]);

    let nailonPrice = nailonQuantity * 1.50;
    let paintPrice = paintQuantity * 14.50;
    let solventPrice = solventQuantity * 5.00;
    let materialsPrice = nailonPrice + paintPrice + solventPrice + 0.40;
    let labourPrice = materialsPrice * 0.30 * hoursQuantity;
    let totalPrice = materialsPrice + labourPrice;

    console.log(totalPrice);
}

sum(["5 ",
"10 ",
"10 ",
"1 "]);