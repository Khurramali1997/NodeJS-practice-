const output1 = require("./test2");
console.log(output1("Success"));
const output_test2 = require("./test3");
const opt2 = new output_test2(20, 30);
const http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("Hello World");
    response.write("This is khurrum ali");
    response.write(`<br> URL = ${request.url}`);
    response.write(`The module test output is ${opt2.sum()}`);
    response.end();
  })
  .listen(1997);

console.log("Server running...");
console.log(`The module test output is ${opt2.sum()}`);
