let array = [1, 2, 3, 4, 5];
console.log(array);
let newArray = array.map(function (val, index, array) {
  return (val = val * 10);
});

console.log(newArray);

console.log(
  newArray.forEach((element) => {
    console.log(element);
  })
);
