const str = "Hello World";
let int = 20;
let val = true;
console.log(str, int, val);

//Normal Array

let array = [10, 20, 30, 40, 50, "Hey,Man This is fun", true];
for (let i = 0; i < 5; i++) {
  console.log(array[i]);
}

//Array In Object Form

let object = { first: "Khurrum", last: "Ali", age: 21, bool: true };

console.log(object.first + " " + object.last);
console.log(object.last);
console.log(object.age);
console.log(object.bool);
console.log(typeof object.age);

//Functions

function egp1() {
  console.log("Function successful");
}
egp1();
function egp2(first, last, age) {
  console.log("Function succesfully created and parameter passed");
  console.log(first + " " + last + " age = " + age);
}
egp2("Khurrum", "Ali", 21);

let randome = function () {
  console.log("Function exprssion successful");
};
randome();

let arrow = () => {
  console.log("Arrow Function successful");
};
arrow();

//Function in an object or object methods

let object_example = {
  first: "Khurrum Ali",
  second: "Ali",
  age: 24,
  expt: (age) => {
    if (age > 18) {
      console.log("Can Drive");
    } else {
      console.log("Can't Drive");
    }
  },
  expt2: function () {
    this.first = "Khurrum";
    console.log(this);
    return this.first + " " + this.second + " and is " + this.age + " old";
  },
};
console.log(object_example.expt2());

//Array with puch and pop functions

let arrayes = [2, 3, 4, 5, 6];

arrayes.push(7);
console.log("Elements removed");
console.log(arrayes.pop());
console.log(arrayes.pop());
console.log(arrayes.pop());
console.log("Elements present");
for (let i = 0; i < arrayes.length; i++) console.log(arrayes[i]);
console.log("Elements that are shifted i.e removed from front");
console.log(arrayes.shift());
console.log(arrayes.shift());
console.log("Elements in array");
for (let i = 0; i < arrayes.length; i++) console.log(arrayes[i]);
console.log("Elements added to beggining of array and hence the new array is");
for (let i = 200; i > 100; i--) arrayes.unshift(i);
for (let i = 0; i < arrayes.length; i++) console.log(arrayes[i]);
console.log(
  " 98 Elements removed from between the array and 25 added at index 5"
);
arrayes.splice(5, 90, 25);
for (let i = 0; i < arrayes.length; i++) console.log(arrayes[i]);

console.log(arrayes);
