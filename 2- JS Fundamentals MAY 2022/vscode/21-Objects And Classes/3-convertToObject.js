function convert(input) {
  let object = JSON.parse(input);
  object = Object.entries(object);
  for (let [key, value] of object) {
    console.log(`${key}: ${value}`);
  }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
