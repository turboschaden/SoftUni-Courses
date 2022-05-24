function fishTnak(input){
    let lenght=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);

    let totalVolume = lenght * width * height * 0.001;

    let volume = totalVolume - (totalVolume * percent / 100);
    
    console.log(volume);
}

fishTnak(["105 ",
"77 ",
"89 ",
"18.5 "]
);