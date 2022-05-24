function deba(arg) {
  let type = typeof arg;
  if (type === "string" || type === "number") {
    console.log(type);
    console.log(arg);
  } else {
    console.log(type);
    console.log("Parameter is not suitable for printing");
  }
}
deba("Hello, JavaScript!");
deba(19);
deba(null);
