function bonusScore(input) {
    let number = Number(input[0]);
    let bonusScore;

    if (number <= 100) {
        bonusScore = 5;
    } else if (number > 100 && number < 1000) {
        bonusScore =  number * 0.20;
    } else {
        bonusScore =  number * 0.10;
    }

    if (number % 2 === 0) {
        bonusScore += 1;
    } else if (number % 10 === 5) {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(bonusScore + number);

}

bonusScore(["175"]);