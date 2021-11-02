const path = require("path");
const fileName = "new4.html";
const dir = "public";
console.clear();
const url = path.join("/", ".", dir, fileName);
console.log(url);
console.log(path.dirname(url));
console.log(path.basename(url));
console.log(path.extname(url));

const info = path.resolve(fileName);
console.log(info);
