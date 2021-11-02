let count = 0;

count++;
console.log(count + " This statement is written first ");

const one = () => {
  count++;
  console.log(count + "  This function  ONE() is executed ");
};
const two = () => {
  count++;
  console.log(count + " This function TWO() is executed ");
};
const three = () => {
  count++;
  console.log(count + " This function THREE() is executed ");
};

const test = () => {
  count++;
  console.log(count + " This function TEST() is executed ");
  one();
  two();
  setTimeout(() => {
    count++;
    console.log(
      count +
        " This function is executed and this is a callback and it is sent into queue " +
        "Since JS is single threaded the function in queue will be executed after all functions in stack"
    );
    three();
  }, 1000);
};

test(); //This is the event that is executed first

count++;
console.log(count + " This statement is written at last first ");
