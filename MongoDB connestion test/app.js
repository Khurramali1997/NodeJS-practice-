import express from "express";
import path from "path";
import { default as mongodb } from "mongodb";
import bodyParser from "body-parser";
import url from "./connection.mjs";

const app = express();
const port = process.env.PORT || 8080;
const MongoClient = mongodb.MongoClient;
const router = express.Router();
const __dirname = path.resolve();
//console.log(__dirname);

app.use("/static", express.static(__dirname + "/public/static/"));

app.use(bodyParser.json());

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const myDatabase = client
    .db("AppTestDatabase")
    .collection("AppTestCollection");
  app
    .route("/users")
    .get((req, res) => {
      myDatabase
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.contentType("application/json");
          res.send(JSON.stringify(results));
        });
    })
    .post((req, res) => {
      console.log(req.body);
      myDatabase.insertOne(req.body).then((results) => {
        console.log(results);
        res.contentType("application/json");
        res.send(JSON.stringify(results));
      });
    })
    .put((req, res) => {})
    .post((req, res) => {});
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Connected successfully to the database");
  db.close();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listning to port number ${port}`);
});
