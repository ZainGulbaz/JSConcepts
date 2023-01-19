const arr = [2, 3, 4, 5, 6];

const newArr = arr.filter((ele) => {
  if (ele % 2 == 0) return ele;
});

console.log(newArr);
