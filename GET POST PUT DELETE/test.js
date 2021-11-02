import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();
const url = path.join(__dirname, "assets", "index.html");

test.use(bodyParser.urlencoded({ extended: true }));

test.use("/static", express.static(__dirname + "/assets/static"));
//console.log(url);

test.get("/user", (req, res) => {
  res.sendFile(url);
});
test.post("/users", (req, res) => {
  console.log(req.body);
  //console.log;
});

test.delete("/users/:id", (req, res) => {
  console.log("Delete rout  triggered");
  const id = req.params.id;
  console.log("found " + id + " and Deleted");
  res.send({ status: "Deleted", id: id });
});
test.put("/users/:id", (req, res) => {
  console.log("PUT rout triggered");
  const id = req.params.id;
  console.log("found " + id + " and Updated ");
  res.send({ status: "Updated ", id: id });
});
test.get("/users/:id", (req, res) => {
  console.log("Get rout triggered");
  const id = req.params.id;
  console.log("found " + id + " and Searhed");
  res.send({ status: "Searched ", id: id });
});
test.listen(port, () => {
  console.log(`Listning to the port number ${port}`);
});
