import express from "express";
import path from "path";
import bodyParser from "body-parser";

const test = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();
const url = path.join(__dirname, "assets", "index.html");
test.use(bodyParser.urlencoded({ extended: true }));

test.get("/users", (req, res) => {
  res.sendFile(url);
  console.log(__dirname);
});

test.post("/users", (req, res) => {
  console.log("Data Submited");
  console.log(req.body);
  res.send('<script>alert("Data Submited Successfully")</script>');
});

test.listen(port, () => {
  console.log(`Listning to the port number ${port}`);
});
