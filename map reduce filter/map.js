//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr = [2, 3, 4, 5, 6];

const newArr = arr.map((ele) => {
  return ele * 2;
});

console.log(newArr);
