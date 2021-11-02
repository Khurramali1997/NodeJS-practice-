import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { default as mongodb } from "mongodb";
import url from "./secret.mjs"; //use .mjs to export th file when type is module

let MongoClient = mongodb.MongoClient;
const router = express.Router();
const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 8080;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const coll = client.db("people").collection("friends");
  console.log("ready");
  const myObj = { name: "Khurrum" };
  coll.insertOne(myObj, (err, res) => {
    console.log("inserted");
    client.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Connected to Database");
  db.close();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server ready at port no ${port}`);
});
