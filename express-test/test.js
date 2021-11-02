import express from "express";
const test = express();
const port = process.env.PORT || 8080;

test.get("/", (req, res) => {
  res.sendFile(
    "C:\\Users\\khurr\\OneDrive\\Attachments\\Desktop\\NodeJS\\express-test\\index.html"
  );
});

test.listen(port, () => {
  console.log(`Listning to the port:- ${port}`);
});
