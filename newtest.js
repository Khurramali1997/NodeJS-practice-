const { throws } = require("assert");
const fs = require("fs");
const folderName = "public4";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("folder Created");
  } else {
    console.log("Folder Exist");
  }
} catch (err) {
  console.log(err);
}

const folderPath = `./${folderName}`;
fs.writeFileSync("index.html", "<h1>Hello World</h1>");
let val1 = fs.readdirSync(folderPath);
console.log(val1);
