function schoolSupplies(input){

    let pencils = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let chem = Number(input[2]) * 1.2;
    let discount = Number(input[3] * 0.01);
    
    let sumBeforeDiscount = pencils + markers + chem;
    let sum = sumBeforeDiscount - (sumBeforeDiscount * discount);

    console.log(sum);

}

schoolSupplies(["4 ","2 ", "5", "13 "]);