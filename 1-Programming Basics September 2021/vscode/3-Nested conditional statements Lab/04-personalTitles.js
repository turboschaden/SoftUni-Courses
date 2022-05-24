function deba(input) {
  let age = Number(input[0]);
  let gender = input[1];
  let title;

  if (gender === "m") {
    if (age >= 16) {
      title = "Mr.";
    } else {
      title = "Master";
    }
  } else {
    if (age >= 16) {
      title = "Ms.";
    } else {
      title = "Miss";
    }
  }
  console.log(title);
}

deba(["13.5", "m"]);
