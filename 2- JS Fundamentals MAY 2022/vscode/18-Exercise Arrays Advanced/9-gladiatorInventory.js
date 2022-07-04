function gladiator(commands) {
  let inventory = commands.shift().split(" ");

  for (let i = 0; i < commands.length; i++) {
    let tokens = commands[i].split(" ");
    let currentCommand = tokens[0];
    let currentEquipment = tokens[1];
    let upgrade;
    if (currentEquipment.includes("-")) {
      let upgradeCommand = currentEquipment.split("-");
      currentEquipment = upgradeCommand[0];
      upgrade = upgradeCommand[1];
    }
    let currentEquipmentIndex = inventory.indexOf(currentEquipment);

    if (currentCommand === "Buy") {
      if (currentEquipmentIndex === -1) {
        inventory.push(currentEquipment);
      }
    }
    if (currentCommand === "Trash") {
      if (currentEquipmentIndex !== -1) {
        inventory.splice(currentEquipmentIndex, 1);
      }
    }
    if (currentCommand === "Repair") {
      if (currentEquipmentIndex !== -1) {
        inventory.push(currentEquipment);
        inventory.splice(currentEquipmentIndex, 1);
      }
    }
    if (currentCommand === "Upgrade") {
      if (currentEquipmentIndex !== -1) {
        let element = `${currentEquipment}:${upgrade}`;
        inventory.splice(currentEquipmentIndex + 1, 0, element);
      }
    }
  }
  console.log(inventory.join(" "));
}
gladiator([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiator([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
