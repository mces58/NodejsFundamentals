const express = require("express");
const app = express();
const admin = require("./router/admin");
const user = require("./router/user");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Anasayfadasınız</h1>");
  res.write("<a href='/admin'>Admin</a> </br>");
  res.write("<a href='/user'>User</a>");
  res.end();
});

app.use("/admin", admin);

app.use("/user", user);

// yukarıda ki middleware'ler çalışmaz ise bu middleware çalışsın diyoruz
// 404 Not Found
app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>"); // hata kodu olarak 404 döndürüyoruz
});

app.listen(3000);
