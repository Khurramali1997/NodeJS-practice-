import path from "path";
import bodyParser from "body-parser";
import express from "express";
import { appendFile } from "fs";
import myObject from "./data.js";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();
const url = path.join(__dirname, "/index.html");

test.use(bodyParser.urlencoded({ extended: true }));
test.use("/static", express.static(__dirname + "/static/"));

test.get("/user", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  res.send("Test rout Get");
});

test.post("/user", (req, res) => {
  res.send("Test rout Post");
});
test.put("/user", (req, res) => {
  res.send("Test rout Put");
});
test.delete("/user", (req, res) => {
  res.send("Test rout delete");
});

test.listen(port, () => {
  console.log("Listning to port number ----> " + port);
  //console.log(myObject);
});
