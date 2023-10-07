/*
! Middleware Nedir?
* Middleware, bir fonksiyondur. Express.js'in önemli bir kavramıdır ve web uygulamalarının işlevselliğini genişletmek için kullanılır. Middleware'ler, HTTP istekleri ve yanıtlarının işlenmesi sırasında araya giren fonksiyonlardır. Bir istek, sunucuya ulaştığında, middleware'ler isteği işleyebilir, isteği değiştirebilir veya yanıtı değiştirebilir.

! Middleware Nasıl Kullanılır?
* Middleware'ler, uygulama nesnesinin use() yöntemiyle uygulanır. Use() yöntemi, uygulama nesnesinin bir yolunu ve bir veya daha fazla işlevi kabul eder.
* Express.js'te middleware, app.use() veya app.METHOD() fonksiyonlarıyla tanımlanır. app.use() genellikle uygulama seviyesinde middleware tanımlamak için kullanılırken, app.METHOD() belirli bir HTTP yöntemiyle ilişkili middleware tanımlamak için kullanılır (örneğin, app.get(), app.post(), vb.).

! Middleware Türleri
* Uygulama seviyesinde middleware
* Yönlendirici seviyesinde middleware
* İlelebet middleware
* Hata işleme middleware'i

- Uygulama Seviyesinde Middleware
* Uygulama seviyesinde middleware, uygulama nesnesinin use() yöntemiyle uygulanır. Use() yöntemi, uygulama nesnesinin bir yolunu ve bir veya daha fazla işlevi kabul eder.

- Yönlendirici Seviyesinde Middleware
* Yönlendirici seviyesinde middleware, yönlendirici nesnesinin use() yöntemiyle uygulanır. Use() yöntemi, yönlendirici nesnesinin bir yolunu ve bir veya daha fazla işlevi kabul eder.

- İlelebet Middleware
* İlelebet middleware, uygulama nesnesinin use() yöntemiyle uygulanır. Use() yöntemi, uygulama nesnesinin bir yolunu ve bir veya daha fazla işlevi kabul eder.

- Hata İşleme Middleware'i
* Hata işleme middleware'i, uygulama nesnesinin use() yöntemiyle uygulanır. Use() yöntemi, uygulama nesnesinin bir yolunu ve bir veya daha fazla işlevi kabul eder.

+ Middleware'ler, üç parametre alır: req (request/istek), res (response/yanıt) ve next. req parametresi, gelen isteği temsil eder ve isteği değiştirmek veya isteğin verilerine erişmek için kullanılır. res parametresi, yanıtı temsil eder ve yanıtın içeriğini, başlıklarını ve durum kodunu değiştirmek için kullanılır. next parametresi ise bir sonraki middleware işlevine geçişi sağlar.

+ Bir middleware işlevi, next() fonksiyonunu çağırmazsa, istek işleme zinciri durur ve sonuç dönmez. Bu nedenle, next() fonksiyonu, işlevin sonunda çağrılmalıdır. Bu, bir middleware'in işini bitirdiğini ve bir sonraki middleware'e geçilmesi gerektiğini belirtir.

+ Middleware'ler, herhangi bir sayıda tanımlanabilir ve sırayla çalışırlar. Sıralama, app.use() veya app.METHOD() işlevlerinin çağrılma sırasına göre belirlenir. İstek, tanımlanan middleware'lerin sırasıyla geçmesiyle her bir middleware'den geçer. Bu, her bir middleware'in isteği değiştirme veya işleme ekleme yeteneği sağlar.
*/

const express = require("express");
const app = express();

// Uygulama seviyesinde middleware
app.use((req, res, next) => {
  console.log("Uygulama seviyesinde Middleware çalıştı.");
  next();
});

// Yönlendirici seviyesinde middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log("Yönlendirici seviyesinde Middleware çalıştı.");
  next();
});

// İlelebet middleware
app.use((req, res, next) => {
  console.log("İlelebet Middleware çalıştı.");
  next();
});

// Hata işleme middleware'i
app.use((req, res, next) => {
  console.log("Hata işleme Middleware çalıştı.");
  res.send("<h1>Middleware'lar bitti geriye bir response döndü</h1>");
});

app.listen(3000);
