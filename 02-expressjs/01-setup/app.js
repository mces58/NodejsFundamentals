// npm i express diyerek express paketini yükledik

// express aslında bir fonksiyondur
const express = require("express");

// express fonksiyonunu çağırarak bir uygulama oluşturuyoruz
const app = express();

// uygulamamızı belirlediğimiz portta dinlemeye başlıyoruz
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// uygulamamızın hangi url isteklerine nasıl cevap vereceğini belirliyoruz
// kullancını anasayfaya geldiğinde(/) uygulama ona "Hello World" mesajını gönderecek
app.get("/", (req, res) => {
  res.send("Hello World");
});

// kullancını /about sayfasına geldiğinde uygulama ona "About Page" mesajını gönderecek
app.get("/about", (req, res) => {
  res.send("About Page");
});
