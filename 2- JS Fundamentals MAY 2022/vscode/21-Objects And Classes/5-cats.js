// class Person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
// }

// let myPerson = new Person("Pesho", 30);
// console.log(myPerson);
function fuckingCats(cats) {
  class Cat {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let catsArray = [];
  for (let cat of cats) {
    cat = cat.split(" ");
    let name = cat[0];
    let age = cat[1];
    let curentCat = new Cat(name, age);
    catsArray.push(curentCat);
  }
  for (let element of catsArray) {
    element.meow();
  }
}
fuckingCats(["Mellow 2", "Tom 5"]);
