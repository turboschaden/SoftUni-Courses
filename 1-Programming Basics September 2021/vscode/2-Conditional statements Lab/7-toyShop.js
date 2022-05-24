function toyStore(input) {
    let tripPrice = Number(input[0]);
    let puzzleQuantity = Number(input[1]);
    let dollQuantity = Number(input[2]);
    let bearQuantity = Number(input[3]);
    let minionQuantity = Number(input[4]);
    let truckQuantity = Number(input[5]);

    let puzzlePrice = puzzleQuantity * 2.6;
    let dollPrice = dollQuantity * 3;
    let bearPrice = bearQuantity * 4.10;
    let minionPrice = minionQuantity * 8.20;
    let truckPrice = truckQuantity * 2;

    let orderQuantity = puzzleQuantity + dollQuantity + bearQuantity + minionQuantity + truckQuantity;
    let orderPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;
    let orderTotal;

    if (orderQuantity >= 50) {
        orderTotal = orderPrice - orderPrice * 0.25;
    } else {
        orderTotal = orderPrice;
    }
    
    let income = orderTotal - orderTotal * 0.1;

    if(income >= tripPrice){
        console.log(`Yes! ${(income - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - income).toFixed(2)} lv needed.`);
    }
}

toyStore(["320", "8", "2", "5", "5", "1"]);