const age = 10;

const obj = {
  age: 20,
  getAge: function () {
    return this.age;
  },
};

console.log(obj.getAge.call({ age: 25 }));
//25
//this--> refers to the object but if we bind any object to a function it has the highest priority
