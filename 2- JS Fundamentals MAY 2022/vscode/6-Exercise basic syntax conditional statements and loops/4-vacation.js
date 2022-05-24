function vacation(group, type, day) {
  let totalPrice = 0;
  if (type === "Students") {
    switch (day) {
      case "Friday":
        totalPrice = group * 8.45;
        break;
      case "Saturday":
        totalPrice = group * 9.8;
        break;
      case "Sunday":
        totalPrice = group * 10.46;
        break;
    }
    if (group >= 30) {
      totalPrice = totalPrice * 0.85;
    }
  } else if (type === "Bussiness") {
    if (group >= 100) {
      switch (day) {
        case "Friday":
          totalPrice = (group - 10) * 10.9;
          break;
        case "Saturday":
          totalPrice = (group - 10) * 15.6;
          break;
        case "Sunday":
          totalPrice = (group - 10) * 16;
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          totalPrice = group * 10.9;
          break;
        case "Saturday":
          totalPrice = group * 15.6;
          break;
        case "Sunday":
          totalPrice = group * 16;
          break;
      }

      switch (day) {
        case "Friday":
          totalPrice = group * 10.9;
          break;
        case "Saturday":
          totalPrice = group * 15.6;
          break;
        case "Sunday":
          totalPrice = group * 16;
          break;
      }
      if (group >= 100) {
        totalPrice = totalPrice * 0.9;
      }
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        totalPrice = group * 15;
        break;
      case "Saturday":
        totalPrice = group * 20;
        break;
      case "Sunday":
        totalPrice = group * 22.5;
        break;
    }
    if (group >= 10 && group <= 20) {
      totalPrice *= 0.95;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(101, "Bussiness", "Sunday");
vacation(
  40,

  "Regular",

  "Saturday"
);
