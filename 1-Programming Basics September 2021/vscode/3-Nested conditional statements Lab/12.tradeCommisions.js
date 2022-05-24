function deba(input) {
  let town = input[0];
  let sales = Number(input[1]);
  let comission;
  if (town === "Sofia") {
    if (sales <= 0 && sales <= 500) {
      comission = sales * 0.05;
    }
  }
  console.log(comission);
}

deba(["Sofia", 100]);
