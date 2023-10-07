const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/*
? body-parser modülü, bu verileri ayrıştırmak ve isteğin gövde verilerini JavaScript nesnelerine dönüştürmek için kullanılır. Bu, isteğin gövde verilerine kolayca erişmenizi ve bu verileri işlemenizi sağlar.
*/

//+ bu modul sayesinde kullanıcının girdiği bilgiyi çekebiliyoruz
//+ extended: false dersek sadece string ve array tipindeki bilgileri çekebiliriz
//+ extended: true dersek her türlü bilgiyi çekebiliriz
app.use(bodyParser.urlencoded({ extended: false })); // bu sayede kullanıcıdan gelen bilgiyi çekebiliyoruz

// ama bu işlemi bu modulu indirmeden de yapabiliriz
// app.use(express.urlencoded({ extended: false }));

// loglama yapar her türlü
app.use("/", (req, res, next) => {
  console.log("loglama yapıldı");
  next();
});

// ürün eklemeye yönlendirme
app.get("/", (req, res, next) => {
  res.send(`
        <html>
            <head>
            <title>Root</title>
            </head>
            <body>
            <a href="/add-product">Add Product</a>
        </html>
        `);
});

// action="product" bu bizi product sayfasına yönlendirir
// method="POST" bu sayede kullanıcıdan gelen bilgiyi çekebiliriz
// get fonksiyonunu kullandık çünkü formu kullanıcıya gönderiyoruz(get ediyoruz)
app.get("/add-product", (req, res) => {
  res.send(`
    <html>
        <head>
        <title>Add Product</title>
        </head>
        <body>
        <form action="/product" method="POST"> 
            <input type="text" name="productName" />
            <button type="submit">Send</button>
        </form>
    </html>
    `);
});

// burada metodu use yerine post kullandık bunun sebebi şu use metodu get ve post isteklerini kabul eder
// lakin biz sadece post isteğini kabul etmek istiyoruz bu yüzden post metodu kullandık post metodu sadece post isteğini kabul eder
// bu sayede kullanıcı sadece post isteği gönderdiğinde bu metoda girebilir
// böylece kullanıcı add-product yerine direkt product sayfasına giderse
// sayfa bulunamadı hatası alır ve body-parser bize boş nesne dönderir
// ama biz metodu post yaptığımızda boş nesne bize gönderilmez çünkü
// kullanıcı form üzerinden post işlemi yapmadığı içindir
// use yerine get ve post metotlarını kullanarak filtreleme yapılabilir
app.post("/product", (req, res, next) => {
  //! bu şekilde kullanıcının girdiği bilgiyi çekeriz lakin bunun için body-parser modulunu indirmen gerekir
  console.log(req.body);
  res.redirect("/"); //+ kullanıcıyı tekrardan root'a yönlendiriyoruz
});

app.listen(3000);
