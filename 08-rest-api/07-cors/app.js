const express = require("express");
const app = express();
const productRouter = require("./router/product");
const cors = require("cors");

// gelen isteklerin(dataların) body kısmını json formatında okumak için
app.use(express.json());

// cors paketini kullanırsak bu kodları yazmamıza gerek kalmaz
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // * tüm domainlerden gelen istekleri kabul et demek
//   res.header("Access-Control-Allow-Headers", "*"); // * tüm headerları kabul et demek
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH"); //* hangi methodları kabul edeceğimizi belirtiyoruz
//   next();
// });

// cors paketi kullanımı
app.use(
  cors({
    origin: "*", // tüm domainlerden gelen istekleri kabul et demek
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//+ bundan önceki dersler de postman kullanıyorduk. lakin bizim uygulamayı tarayıcıdan da test etmemiz gerekiyor. Bu test işlemi için basit bir html sayfası oluşturacağız. Bu html sayfası ile bizim uygulamamız arasında cors hatası alacağız. Bunun sebebi tarayıcıların güvenlik önlemleridir. Tarayıcılar güvenlik önlemleri olarak bizim uygulamamızın farklı bir domainden gelen istekleri kabul etmemesini sağlar.

//- örnegin bizim uygulamamız 127.0.0.1:3000 adresinden çalışıyor. html sayfamızda 127.0.0.1:5500 adresinde çalışıyor olsun ve bizim uygulamamızdan veri çekmek istiyor. Bu durumda tarayıcı güvenlik önlemleri devreye giriyor ve bizim uygulamamızdan veri çekemiyor. Bu durumda bizim uygulamamızın farklı bir domainden gelen istekleri kabul etmesi için cors paketini kullanmamız gerekiyor.

//! html sayfasını open with live server şeklinde çalıştırmamız gerekiyor
