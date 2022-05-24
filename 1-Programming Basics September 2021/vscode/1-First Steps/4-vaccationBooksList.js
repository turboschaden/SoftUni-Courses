function reading(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);

    let timePerBook = bookPages / pagesPerHour;
    let timePerDay = timePerBook / daysPerBook;

    console.log(timePerDay);

}

reading(["432 ", "15 ", "4 "]);