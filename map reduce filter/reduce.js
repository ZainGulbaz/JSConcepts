//The reduce method returns a single value after accumulation of all elements
//It takes two arguments accumulator and currentValue in its argument

const arr = [2, 3, 4, 5, 6];

console.log(
  arr.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return (accumulator = currentValue + accumulator);
  })
);

//console.log(newArr);
