//promise using arrow function

let prom = new Promise((resolve, reject) => {
  let x = true;
  if (x) {
    console.log("The resolve function will be called for first promise");
    resolve("This is the value printed by resolves's then block");
  } else {
    reject("This is the value printed by reject's then block");
    console.log("The resolve function will be called for first promise");
  }
});

prom
  .then(
    (val) => {
      console.log(val);
    },
    () => {}
  )
  .catch((val) => {
    console.log(val);
  });

//promice using function expression syntax
let prom2 = new Promise((resolve, reject) => {
  let x = false;
  if (x) {
    console.log("Resolve is being called for second promise");
    resolve();
  } else {
    console.log("Reject is being called for second promise");
    reject();
  }
});

prom2
  .then(() => {
    let a = 50,
      b = 25;
    let sum = a + b;
    console.log(`sum =   ${sum}`);
  })
  .catch(() => {
    let a = 50,
      b = 25;
    let diff = a - b;
    console.log(`Diffrence =  ${diff}`);
  });

//Promise using function

function prom3() {
  return new Promise((resolve, reject) => {
    let x = false;
    if (x) {
      console.log("Resolve is being called for third promise");
      resolve();
    } else {
      console.log("Reject is being called for third promise");
      reject();
    }
  });
}

prom3()
  .then(() => {
    let a = 50,
      b = 25;
    let mul = a * b;
    console.log(`Product =   ${mul}`);
  })
  .catch(() => {
    let a = 50,
      b = 25;
    let div = a - b;
    console.log(`Quotient =  ${div}`);
  });

//Try and catch block for error handling or giving custom error for an operation

let test = (a, b) => {
  let sum = a + b;
  try {
    if (isNaN(sum)) throw "value is not a number";
    if (sum < 0) throw "Not a natural number";
  } catch (error1) {
    console.log(`The error is : ${error1}`);
  } finally {
    let x = parseInt(a);
    let y = parseInt(b);
    console.log(`The sum after parsing is = ${x + y}`);
  }
};

test(-10, -20);
test("random");
test(100, 50);
