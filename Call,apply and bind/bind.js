//The bind binds an object with the function which can be accessed with this keyword and returns a new function;
var obj = { name: "Zain Gulbaz" };
function func(age, year) {
  console.log(`My name is ${this.name} and my age is ${age} ${year}`);
}

func.bind(obj, 25, 1997)();
// newFunc(25, 1997);
// newFunc(26, 1997);
