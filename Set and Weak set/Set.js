// Set is a special Data structre introduced by ECMA Script 6. It stores the data like array but unlike array it does not have any duplicate elements

//Returns Object

let set = new Set();
set.add("Zain");
set.add("Zain");
console.log(set);

//When duplicate values are passed to any set they are excluded

set.add("Taimur");
console.log(set);
set.delete("Zain");
console.log(set);
