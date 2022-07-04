function passCheck(pass) {
  let inputString = pass.toString();
  if (!lengthCheck(pass)) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!onlyLettersAndNumbers(pass)) {
    console.log("Password must consist only of letters and digits");
  }
  if (!digits(pass)) {
    console.log("Password must have at least 2 digits");
  }
  if (lengthCheck(pass) && onlyLettersAndNumbers(pass) && digits(pass)) {
    console.log("Password is valid");
  }

  function digits() {
    let counter = 0;
    for (symbol of inputString) {
      let currentChar = symbol.charCodeAt(0);
      if (currentChar >= 48 && currentChar <= 57) {
        counter++;
      }
    }
    return counter >= 2 ? true : false;
  }

  function lengthCheck() {
    let inputStringLength = inputString.length;
    if (inputStringLength >= 6 && inputStringLength <= 10) {
      return true;
    } else return false;
  }
  function onlyLettersAndNumbers(input) {
    return /^[A-Za-z0-9]*$/.test(input);
  }
}
passCheck("logIn22@");
