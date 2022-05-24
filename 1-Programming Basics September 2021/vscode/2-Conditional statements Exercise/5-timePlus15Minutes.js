function time(input) {
    let hr = Number(input[0]);
    let min = Number(input[1]) + 15;

    if (min >= 60) {
        hr += 1;
        min -= 60;
        if (hr >= 24) {
            hr -= 24;
        }
    }
    if (min > 9) {
        console.log(`${hr}:${min}`);
    } else {
        console.log(`${hr}:0${min}`);
    }
}

time(["1", "46"]);