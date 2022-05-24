function swimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let ivanTime = distance * timeForMeter;
    let slowDown = Math.floor(distance / 15) * 12.5;
    let totalTime = ivanTime + slowDown;

    if (currentRecord <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - currentRecord).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}

swimmingRecord(["10464",
"1500",
"20"]);