function func() {
  console.log(this.name);
}

let obj = {
  name: "Zain",
  func: func.bind(null),
};

obj.func();
