function deba(input) {
  let movieCount = Number(input[0]);
  let highestRating = Number.MIN_SAFE_INTEGER;
  let highestRatingMovie;
  let lowestRating = Number.MAX_SAFE_INTEGER;
  let lowestRatingMovie;
  let sumRating = 0;
  let inputL = input.length;

  for (i = 1; i < inputL; i++) {
    let movieName = input[i];
    i++;
    let movieRating = Number(input[i]);
    sumRating += movieRating;
    if (movieRating > highestRating) {
      highestRating = movieRating;
      highestRatingMovie = movieName;
    } else if (movieRating < lowestRating) {
      lowestRating = movieRating;
      lowestRatingMovie = movieName;
    }
  }
  let averageRating = sumRating / movieCount;
  console.log(
    `${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
deba([
  '5',
  'A Star is Born',
  '7.8',
  'Creed 2',
  '7.3',
  'Mary Poppins',
  '7.2',
  'Vice',
  '7.2',
  'Captain Marvel',
  '7.1',
]);
