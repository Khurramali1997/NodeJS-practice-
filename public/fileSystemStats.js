"use strict";
const fs = require("fs");
const { createInflateRaw } = require("zlib");
const dir = "./public";
const fileName = "new9.html";
const http = require("http");
const { request } = require("http");
const { resolve } = require("path");
const url = `${dir}/${fileName}`;

http
  .createServer((req, res) => {
    fs.readFile(url, (err, html) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      console.log(html);
      res.write(html);
      return res.end();
    });
    console.log("Server running");
  })
  .listen(9020);

const rs = fs.createReadStream(url);
rs.on("open", (e) => {
  console.log("File is open");
  let val = "<br>Opened";
  updateFile(val);
});

function updateFile(val) {
  fs.appendFile(url, val, (err) => {
    if (err) throw err;
    console.log("updated file");
  });
}

fs.stat(url, (err, stats) => {
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isFile());
});
