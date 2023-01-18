//Shallow Copy

const a = { name: "Zain Gulbaz" };
const b = a;

//Deep Copy;

//const c = { ...a };
// const c = JSON.parse(JSON.stringify(a));
const c = Object.assign({}, a);
a.name = "Zain";
console.log(c);
