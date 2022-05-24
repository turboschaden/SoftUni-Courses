function unitConv(ins) {
    let input = Number(ins[0]);
    let inputUnit = ins[1];
    let outputUnit = ins[2];

    let inputMm = 0;
    let output = 0;

    if (inputUnit === "m") {
        inputMm = input * 1000;
    } else if (inputUnit === "cm") {
        inputMm = input * 10;
    } else if (inputUnit === "mm") {
        inputMm = input;
    }

    if (outputUnit === "mm") {
        output = inputMm;
    } else if (outputUnit === "cm") {
        output = inputMm * 0.1;
    } else if (outputUnit === "m") {
        output = inputMm * 0.001
    }

    console.log(output.toFixed(3));
}

unitConv(["12","mm","m"]);