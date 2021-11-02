import express from "express";
import path from "path";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve(); // els ethe

const fileName = "index.html";
const url = path.join(__dirname, "assets", "index.html"); //a custom path can also be used like in the other file

test.use(express.static(__dirname + "/assets"));

test.get("/", (req, res) => {
  res.sendFile("index.html"); // change "index.html"  to "url" without the quotes to make use of the dynamic path
});

test.listen(port, () => {
  console.log(`Listning to the port number ${port}`);
});
