function amazing(num) {
  num = String(num);
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result += Number(num[i]);
  }
  console.log(
    `${num} Amazing? ${result.toString().indexOf("9") >= 0 ? "True" : "False"}`
  );
  //   let resultToString = String(result);
  //   let isAmazing = false;
  //   for (let i = 0; i < resultToString.length; i++) {
  //     if (resultToString[i] === "9") {
  //       isAmazing = true;
  //       break;
  //     }
  //   }
  //   let amazing = isAmazing ? "True" : "False";
  //   console.log(`${num} Amazing? ${amazing}`);
}

amazing(1233);
amazing(583472);
