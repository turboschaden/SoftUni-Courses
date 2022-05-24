function equipment(input){
    let price = Number(input[0]);

    let shoesPrice = price - price * 0.40;
    let suitPrice = shoesPrice - shoesPrice * 0.20;
    let ballPrice = suitPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let totalCost = price + shoesPrice + suitPrice + ballPrice + accessoriesPrice
  
    console.log(totalCost.toFixed);
}

equipment(["550"]);