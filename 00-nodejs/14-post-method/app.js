const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;

  // anasayfa url'ine gidilirse index.html içeriği getirilir
  if (url === "/") {
    fs.readFile("./html/index.html", "utf-8", (err, html) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }

  // form işlemlerinde iki konuyu göz önüne almak gerekir
  // 1. form get ile getirilmesi
  // 2. form post ile gönderilmesi

  // form'dan get ile getirilirse buraya düşecektir
  else if (url === "/create" && req.method == "GET") {
    fs.readFile("./html/create.html", "utf-8", (err, html) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }

  // form'dan post edilirse buraya düşecektir(butona tıklanırsa)
  else if (url === "/create" && req.method == "POST") {
    // form'dan gelen verileri almak için data event'i kullanılır
    const data = [];
    let result;
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    // veri alma işlemi bittiğinde bu verileri anlamlı bir şekile dönüştürülmeli bu işlem için end event'i kullanılır
    req.on("end", () => {
      result = Buffer.concat(data).toString() + "\n";
      console.log(result);

      // verileri log.txt dosyasına yazmak için
      fs.appendFile("log.txt", result, (err) => {
        if (err) throw err;

        // anasayfaya yönlendirme
        res.writeHead(302, { Location: "/" });
        res.end();
      });
    });
  }
});

server.listen(3000, () => console.log("Server is running on port 3000"));
