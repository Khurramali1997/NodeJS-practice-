import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>I love my pittu baby dalin sona</h1>");
});

app.listen(port, () => {
  console.log(`Ready listning to port ${port}`);
});
