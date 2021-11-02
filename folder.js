const fs = require("fs");
const { createInflateRaw } = require("zlib");
const dir = "./public";
let tempCounter = 1; //to give file name dynamically;
let newFileName = `new${tempCounter}.html`; //File name is being created;
console.clear();
for (let i = 0; i < 10; i++) {
  // creates five files in a row ;
  fs.readdir(dir, (error, files) => {
    // cheacks the number of files in the dir directory if and accepts a callback
    //console.log(files);// gives out files if any present
    console.log(files); // gives the total count of files
    //console.log(error); //errors are generated and given out if any errors are found
    tempCounter = files.length + i + 1; //file number
    newFileName = `new${tempCounter}.html`; //file complete name
    createNewFile(newFileName); // a functions to create a file
  });
}
function createNewFile(myfileName) {
  const html = `<h1>Hello ${tempCounter}<h1>`;
  fs.appendFile(dir + "/" + myfileName, html, (err) => {
    // the fs function wher file is created
    if (err) throw err;
    console.log("Save File " + myfileName);
  });
}
