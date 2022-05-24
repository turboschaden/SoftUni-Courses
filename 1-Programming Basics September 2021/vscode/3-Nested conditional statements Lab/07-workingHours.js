function deba(input) {
  let time = Number(input[0]);
  let day = input[1];
  let isOpen;
  if (time >= 10 && time <= 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        console.log("open");
        break;
      case "Saturday":
      case "Sunday":
        console.log("closed");
        break;
      default:
        console.log("Error");
    }
  } else console.log("closed");
}
deba(["18", "Friday"]);
