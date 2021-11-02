import path from "path";
import bodyParser from "body-parser";
import express from "express";
import { appendFile } from "fs";
import myObject from "./test-user-data.js";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();
const url = path.join(__dirname, "/index.html");
const logOutput = (req, res, next) => {
  //a custom middleware  similar to body-parser
  console.log("this is a custom middleware");
  console.log(req.params);
  next();
};
//console.log(__dirname);
//console.log(url);
//console.log(myObject);
//console.log(myObject.users.some((element) => element.id == 1));

test.use(logOutput); //the middleware id being used it is being run in all routs i.e GET,POST,DELETE and PUT

test.use(bodyParser.urlencoded({ extended: true }));

test.use("/static", express.static(__dirname + "/static"));

test.get("/users/:id", (req, res) => {
  console.log(req.params);
  let myJson = {};
  if (myObject.users.some((element) => element.id == 1)) {
    myJson = myObject.users.filter((element) => element.id == req.params.id);
  } else {
    myJson = { result: "not fount", items: 0 };
  }
  res.json(myJson);
});

test.get("/user", (req, res) => {
  res.sendFile(url);
});

test.post("/users", (req, res) => {
  console.log(req.body);
  res.sendFile(url);
  console.log("ready");
});

test.listen(port, () => {
  console.log(`Listning to the port no:--->${port}`);
});
