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

//using updating of files

fs.writeFile(
  dir + "/index1.html",
  "<h1>This is the data that i have added to the file</h1>",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

//updating / appending

fs.appendFile(
  dir + "/index2.html",
  "<h2>This is the data that i have added/updted in the file</h2>",
  (err) => {
    if (err) throw err;
    console.log("File created/updated and data written successfully");
  }
);

//using the function to delete the files

fs.unlink(dir + `/new8.html`, (err) => {
  if (err) throw err;
});

console.log("The files left in the dir directory  are as follows");

fs.readdir(dir, (err, files) => {
  files.forEach((element) => {
    console.log("Files currently in the array are as follows " + element);
  });
  console.log(err);
});

//renaming a file

fs.readdir(dir, (err, files) => {
  console.log(files);
  console.log(err);
  fs.rename("new9.html", "index9.html", (err) => {
    if (err) throw err;
    console.log("File Successfully renaimed");
  });
});

fs.readdir(dir, (err, files) => {
  console.log(files);
  console.log(err);
});

fs.rename("assign1.html", "newassign.html", (err) => {
  console.log(err);
  console.log("name change successful");
}); //working

fs.stat();
