const express = require("express");
const app = express();

// nodejs-fundamental bölümünde 8. derste yönlendirme işlemlerini if blokları ile yapmıştık
// örneğin req.url == "/" ise ana sayfaya git veya req.url == "/about" ise about sayfasını göster tarzında
// burada ise expressjs ile bu işlemi daha kolay bir şekilde yapabiliriz
// bu yönlendirme işlemleri yine middleware kullanılırak yapılır extra parametre olarak bir endpoint eklenir
// örneğin app.get("/", (req, res, next) => {}) gibi
// burada get, post, put, delete gibi http methodları kullanılabilir
// bu methodlar ile gelen isteklerin yönlendirilmesi sağlanır

/*
// "/" endpointine gelen isteklerde çalışacak middleware
// next parametresi kullanılmadı çünkü işlemi burada bitirdik
app.use("/", (req, res, next) => {
  res.send("<h1>Index sayfasına hoşgeldiniz</h1>");
});

// "/products" endpointine gelen isteklerde çalışacak middleware
app.use("/products", (req, res) => {
  res.send("<h1>Ürünler sayfasına hoşgeldiniz</h1>");
});
*/

// yukarıda "/products" endpointine gidemeyiz
// çünkü ondan önce olan "/" middleware "/products" middleware kapsamaktadır
// bu yüzden "/products" endpointine gidemeyiz
// bunu düzeltmek için ise "/products" middleware "/" middleware'ından önce yazmalıyız
// yani sıralamayı özelden-genele(küçükten-büyüğe) yaymalıyız
// bir diğer çözüm ise
// app.use() yerine app.get() metodunu kullanmaktır
// app.use() metodu get, post, put ve delete işlemlerinin tamamını kapsar
// ama app.get() metodu sadece get işlemini kapsar böylece bir filtreleme yapmış oluruz
// bu sayede "/products" endpointine gidilebilir
// bu nedenle yukarıda ki kodu yorum satırına alıp aşağıda doğru halini yazacağız
// bunlardan önce birde her koşulda bir loglama yapan middleware yazalım

// bu middleware ise hangi sayfaya gidilirse gidilsin konsola loglama yapmaya yarar
// burada next fonksiyonu çağırılmazsa aşağıdaki middleware'lar çalışmaz
app.use("/", (req, res, next) => {
  console.log("loglama yapıldı");
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>Index sayfasına hoşgeldiniz</h1>");
});

app.get("/products", (req, res, next) => {
  res.send("<h1>Ürünler sayfasına hoşgeldiniz</h1>");
});

// :productId bir parametredir değişkendir
// bu parametreye istediğimiz değeri verebiliriz
app.get("/products/:productId", (req, res, next) => {
  // req.params ile bu parametreye erişebiliriz
  console.log(req.params);
  res.send("<h1>Ürün detayı</h1>");
});

// birden fazla parametre geçebiliriz
app.get("/products/:productId/dates/:productionDate", (req, res, next) => {
  console.log(req.params);
  res.send("<h1>Ürün detayı tarih bilgileri</h1>");
});

app.listen(3000);
