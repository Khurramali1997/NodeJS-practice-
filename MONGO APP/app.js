import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongodb, { MongoClient } from "mongodb";
import dotenv from "dotenv"; //for api keys and cloud database
import url from "./url.mjs"; //local database
import myObject from "./data.mjs"; //Data that will be stored indatabase
import { appendFile } from "fs";
import { ObjectId } from "bson";
dotenv.config({ path: true });

const __dirname = path.resolve();
const port = process.env.PORT || 8080;
const MogoClient = mongodb.MongoClient;
const app = express();
const router = express.Router();

app.use("/static", express.static(__dirname + "/static"));

app.use(bodyParser.json());

const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

client.connect((err) => {
  const myDB = client.db("localTest").collection("testData");
  console.log("Connection Ready");
  app.get("/users/:name", (req, res) => {
    console.log(req.params);
    myDB
      .find(req.params)
      .toArray()
      .then((results) => {
        console.log(results);
        res.contentType("application/json");
        res.send(JSON.stringify(results));
      });
  });

  //Main route for get and post

  app
    .route("/user") //If all routs have the uri then using promise is smarter
    .get((req, res) => {
      //Reading the input from the database
      myDB
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.contentType("application/json");
          res.send(JSON.stringify(results));
        });
    })
    .post((req, res) => {
      //adding to input i.e the database collection
      console.log(req.body);
      myDB.insertOne(req.body).then((results) => {
        console.log(results);
        res.contentType("application/json");
        res.send(JSON.stringify(results));
      });
    })
    .put((req, res) => {
      //updating the input in database
      console.log(req.body);
      myDB
        .findOneAndUpdate(
          { _id: ObjectId(req.body._id) },
          {
            $set: {
              name: req.body.name,
            },
          },
          {
            upsert: false,
          }
        )
        .then((results) => {
          console.log(results);
          res.contentType("application/json");
          res.send(JSON.stringify(results));
        });
    })
    .delete((req, res) => {
      //Deleting content from the database
      console.log(req.body);
      myDB
        .deleteOne({
          _id: ObjectId(req.body._id),
        })
        .then((result) => {
          let boolValue = true;
          if (result.deletedCount === 0) {
            boolValue: false;
          }
          res.send({ status: boolValue });
        })
        .catch((err) => console.log(err));
    });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Connected to database");
  db.close();
}); //Testing the connection here

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Listning to port no ---> ${port}`);
});
