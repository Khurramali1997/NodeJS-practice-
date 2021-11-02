//Asunc Await
console.log("First line of JavaScript program");
let a = 10,
  b = 20;
let sum = 0;
let x = true;
let example = async () => {
  console.log("Async Function is being executed");
  if (sum > 0) {
    console.log(`a and b have not been added`);
  } else {
    let val = await fetch("http://example.com/movies.json");
    console.log("Fetch has been executed");
    console.log("Promise is being fulfilled");
  }
  console.log("Function has done being executed");
};

example().then(() => {
  console.log(
    "Output after the promice is resolved as async returns a promice"
  );
});

console.log("last line of JS program");
