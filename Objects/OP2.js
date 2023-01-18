let a = { name: "Zain Gulbaz" };

const b = a;

a = null;

console.log(b);

// a ---> {name:ZainGulbaz} Same Memory Slot
//                  ^
//                  b
//
