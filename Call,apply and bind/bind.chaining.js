//Bind chaining does not exist in JS, once an object is binded, it remains as it is.

function print() {
  console.log(this.name);
}

const func = print
  .bind({ name: "Zain Gulbaz" })
  .bind({ name: "Joe Tribbiani" });

func();
