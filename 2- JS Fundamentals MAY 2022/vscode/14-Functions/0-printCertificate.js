function printCertificate(grade, nameArr) {
  if (pass(grade)) {
    printHeader();
    printName(nameArr);
    formatGrade(grade);
  } else {
    console.log(`Student does not qualify`);
  }
  function formatGrade(grade) {
    if (grade < 3) {
      console.log(`Fail (2)`);
    } else if (grade >= 3 && grade < 3.5) {
      console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.5 && grade < 4.5) {
      console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.5 && grade < 5.5) {
      console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.5 && grade <= 6) {
      console.log(`Excellent (${grade.toFixed(2)})`);
    }
  }
  function printName(nameArr) {
    console.log(nameArr[0] + " " + nameArr[1]);
  }
  function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
  }
  function pass(grade) {
    return grade >= 3;
  }
}

printCertificate(5.25, ["John", "Smith"]);
printCertificate(2.5, ["Gosho", "Petrov"]);
printCertificate(4.4, ["Pesho", "Goshev"]);
