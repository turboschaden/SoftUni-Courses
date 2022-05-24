function solve(input) {
    let budget = Number(input[0]);
    let statCount = Number(input[1]);
    let statClothesPrice = Number(input[2]);

    let decorPrice = budget * 0.1;
    let clothesPrice = statCount * statClothesPrice;


    if (statCount > 150) {
        clothesPrice -= clothesPrice * 0.1;
    }
    let moviePrice = decorPrice + clothesPrice;

    if (moviePrice > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(moviePrice - budget).toFixed(2)} leva more.`);
    } else if (moviePrice <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - moviePrice).toFixed(2)} leva left.`);
    }

}

solve(["15437.62",
    "186",
    "57.99"]);
