const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    fs.readFile("./html/index.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(html);
      res.end();
    });
  } else if (url === "/about") {
    fs.readFile("./html/about.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(html);
      res.end();
    });
  } else if (url === "/contact") {
    fs.readFile("./html/contact.html", (err, html) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("./html/404.html", (err, html) => {
      if (err) throw err;

      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.write(html);
      res.end();
    });
  }
});

server.listen(3000, () => console.log("Server is running on port 3000"));
