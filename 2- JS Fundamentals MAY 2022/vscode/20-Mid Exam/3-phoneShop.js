function phoneShop(input) {
  let storage = input.shift().split(", ");

  for (currentLine of input) {
    if (currentLine !== "End") {
      currentLine = currentLine.split(" - ");
      let command = currentLine[0];
      let phone = currentLine[1];
      if (command === "Add") {
        if (!storage.includes(phone)) {
          storage.push(phone);
        }
      } else if (command === "Remove") {
        let index = storage.indexOf(phone);
        if (index !== -1) {
          storage.splice(index, 1);
        }
      } else if (command === "Bonus phone") {
        phone = phone.split(":");
        let oldPhone = phone[0];
        let newPhone = phone[1];
        let index = storage.indexOf(oldPhone);
        if (index !== -1) {
          storage.splice(index + 1, 0, newPhone);
        }
      } else if (command === "Last") {
        let index = storage.indexOf(phone);
        if (index !== -1) {
          let temp = storage[index];
          storage.splice(index, 1);
          storage.push(temp);
        }
      }
    } else {
      console.log(storage.join(", "));
      break;
    }
  }
}
phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);
phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
