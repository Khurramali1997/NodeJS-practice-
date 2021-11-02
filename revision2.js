let array = [1, 2, 3, 4, 5, { first: "Khurrum", last: "Ali", age: 24 }];
console.log(array);
console.log("Converting array into a string");
let val = array.toString();
val = JSON.stringify(array);
console.log(val);
console.log(
  "Converting string into a new array but it is not the orignal array but a diffrent array name val containing the same elements"
);
val = JSON.parse(val);
console.log(val);

let array3 = val.map((val) => {
  return val;
});
console.log(array3);
let array4 = array3.map((array3) => {
  return array3;
});
console.log(array4);
let array5 = array4.map((array4) => array4);
console.log(array5);

//Date method

let d = new Date();
console.log(d.getFullYear());
