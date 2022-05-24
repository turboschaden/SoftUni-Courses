function areaOfFigure(input) {

    let figType = input[0];

    if (figType === "square") {
        let sideA = Number(input[1]);
        let area = sideA * sideA;
        console.log(area.toFixed(3));
    } else if (figType === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (figType === "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(3));
    } else if (figType === "triangle") {
        let sideA = Number(input[1]);
        let heightA = Number(input[2]);
        let area = sideA * heightA / 2;
        console.log(area.toFixed(3));
    }
}

areaOfFigure(["triangle",
"4.5",
"20"]);