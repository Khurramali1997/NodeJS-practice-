import express from "express";
import path from "path";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();

const url = path.join(__dirname, "assets", "index.html");

//console.log(path);

test.get("/", (req, res) => {
  res.sendFile(url);
});

//using the static rout

const file1 = "index2.html";
const file2 = "index3.htm";

test.get("/path2", (req, res) => {
  res.sendFile(
    "C:\\Users\\khurr\\OneDrive\\Attachments\\Desktop\\NodeJS\\routing-with-express\\assets\\index2.html"
  );
});

test.get("/path3", (req, res) => {
  res.sendFile(
    "C:\\Users\\khurr\\OneDrive\\Attachments\\Desktop\\NodeJS\\routing-with-express\\assets\\index3.html"
  );
});

test.listen(port, () => {
  console.log(`The port being lissened to is ${port}`);
});
