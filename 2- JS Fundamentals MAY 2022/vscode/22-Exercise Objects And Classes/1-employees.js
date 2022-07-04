function deba(input) {
  for (let currentPerson of input) {
    let person = {};
    person.name = currentPerson;
    person.personalNumber = currentPerson.length;

    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNumber}`
    );
  }
}
deba(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
