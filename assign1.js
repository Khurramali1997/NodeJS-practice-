let array = [];

let filler = (first, last) => {
  let obj = {
    firstName: first,
    lastName: last,
  };
  array.push(obj);
};

filler("John", "Paul");
filler(prompt("First name"), prompt("LastRonald name"));
for (let i = 0; i < array.length; i++) console.log(array[i]);
