"use strict";
const fs = require("fs");
const { createInflateRaw } = require("zlib");
const dir = "./public";
const fileName = "Test_File_by_Khurrum345";

fs.readdir(dir, (err, files) => {
  console.log(files);
  console.log(
    `Total number present in the folder/directory names "public" = ${files.length}`
  );
  console.log(err);
});

fs.appendFile(dir + "/" + fileName, "Hello World This Was A Success", (err) => {
  if (err) {
    console.log("There was an error found here");
    throw err;
  } else {
    console.log("File Created/Appended");
  }
});
