//Objects always refrence when they are assigned to another variable i.e. All of these are assigned to the same reference

const a = { name: "Zain" };

const b = a;

console.log(b == a);
console.log({ name: "Joey" } == { name: "Joey" });
console.log({ name: "Joey" } === { name: "Joey" });




