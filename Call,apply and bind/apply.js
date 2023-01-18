const obj = { name: "Zain Gulbaz" };

function func(age, year) {
  console.log(`My name is ${this.name} and My age is ${age} ${year}`);
}

func.apply(obj, [24, 1997]);
