const fs = require("fs");
const fileName = "new7.html";
const data = fs.readFileSync(fileName, "utf8");
console.log(data);

const arr = ["red,blue", "green"];

fs.writeFile(fileName, "\nHello world again 2" + arr, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Done");
  }
});

//Appends the file and does not overrides the data
/*
let count = 0;
fs.writeFile(
  fileName,
  "\nHello world again appended " + `${count++}`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
    }
  }
);
*/
