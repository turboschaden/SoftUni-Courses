function depositCalc(input){

    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let depositInterestRate = Number(input[2] * 0.1) ;
    let depositInterestAnnual = depositInterestRate * depositSum / 10;
    let depositInterestMonthly = depositInterestAnnual  / 12;

    let sum = depositSum + depositTerm * depositInterestMonthly;

    console.log(sum);

}

depositCalc(["200 ", "3 ", "5.7"]);