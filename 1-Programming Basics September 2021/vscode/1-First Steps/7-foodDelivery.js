function solve(input){ 
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let sum = chickenMenu * 10.35 + fishMenu * 12.4 + veganMenu * 8.15;
    let totalSum = 2.5 + sum + sum * 0.2;
    console.log(totalSum);

}

solve(["9 ",
"2 ",
"6 "]);