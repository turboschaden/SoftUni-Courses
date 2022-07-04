// function city(input) {
//   console.log(Object.keys(input));
//   for (let key of Object.keys(input)) {
//     console.log(`${key}: ${input[key]}`);
//   }
// }
function city(city) {
  let entries = Object.entries(city);

  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
