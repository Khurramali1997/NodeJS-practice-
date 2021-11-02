import express from "express";
import path from "path";
import bodyParser from "body-parser";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();
console.log(__dirname);

test.use(bodyParser.urlencoded({ extended: true }));

test.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/test2.js");
});

test.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Done:User ${req.body.user} ID  ${req.body.id}`);
});

test.listen(port, () => {
  console.log(`listning on port ${port}`);
});
