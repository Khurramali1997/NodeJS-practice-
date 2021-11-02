let array = [1, 2, 3, 4, 5];
let count = 0;

let print = (array, callback) => {
  setTimeout(() => {
    array.forEach((el) => {
      count++;
      console.log(el + ` Statement execution number = ${count} `);
    });
  }, 4000);
  setTimeout(() => {
    count++;
    console.log(` Callbact Fenction Statement execution number = ${count} `);
    callback();
  }, 2000);
};
let push = () => {
  count++;
  console.log(` Push Function Statement execution number = ${count} `);
  setTimeout(() => {
    count++;
    console.log(`Push Statement execution number = ${count} `);
    array.push(6);
  }, 1000);
};

setTimeout(() => {
  print(array, push);
}, 1000);
count++;
console.log(`Statement execution number = ${count} `);
