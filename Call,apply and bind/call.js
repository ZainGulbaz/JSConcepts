//Call provides the method with the context of the object

let obj = { name: "Zain Gulbaz" };

function func(age, year) {
  console.log("HELLO, " + this.name + " is " + age + " " + year);
}
func.call(obj, 25, 1997);
