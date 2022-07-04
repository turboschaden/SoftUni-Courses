function converter(name, lastName, hairColor) {
  let object = { name, lastName, hairColor };
  let jsonObject = JSON.stringify(object);
  console.log(jsonObject);
}
converter("Peter", "Smith", "Blond");
