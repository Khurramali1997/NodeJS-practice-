//console.log(global); global is an object in javascript

let random = 0;
function timer(val) {
  console.log("timer ran " + val);
}
setTimeout(timer(2000), 2000, "Timer 1"); //makes sure that the function runs after 1second of this line being executed

let namefunc = (value) => {
  random++;
  console.log("Khurrum Ali " + value + random);
};

for (let i = 0; i < 51; i++) setTimeout(namefunc, i * 1000, "Successful");

//
