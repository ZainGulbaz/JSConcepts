//Weakset is same as set in Javascript but it only contains objects nor Strings,Numbers or other data types

// let wset = new WeakSet("Zain"); //error

//It has only three methods
// add returns WeakSet
// delete  return boolean
// has     return boolean

let wset = new WeakSet();
const obj = { name: "Zain" };
console.log(wset.add(obj));

console.log(wset.has(obj));
console.log(wset.has(obj));
