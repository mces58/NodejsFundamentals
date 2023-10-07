const express = require("express");
const app = express();
const productRouter = require("./router/product");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);

mongoose
  .connect("CONNECTION_STRING")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*
+ Mongoose, Node.js platformunda MongoDB ile etkileşimde bulunmayı kolaylaştıran bir JavaScript kütüphanesidir. MongoDB, NoSQL veritabanı türlerinden biri olan belge tabanlı bir veritabanıdır. Mongoose, MongoDB ile iletişim kurarken daha düzenli ve yapılandırılmış bir şekilde çalışmanıza yardımcı olan bir ORM (Object-Relational Mapping) aracı olarak düşünülebilir.

- Mongoose kütüphanesi, şu temel işlevleri sağlar:

* 1-Veri Modellemesi: Mongoose, MongoDB koleksiyonlarını JavaScript sınıflarına eşlemek için kullanılır. Bu, veritabanında depolanacak veri türlerini ve yapısını tanımlamanıza olanak tanır.

* 2-Veri Doğrulama: Mongoose, verilerinizi tanımladığınız modele uygunluğunu doğrulamanıza yardımcı olur. Bu sayede gereksinim duyulan alanların ve veri türlerinin uygun şekilde sağlanmasını sağlar.

* 3-CRUD İşlemleri: Mongoose, veritabanı işlemleri (Create, Read, Update, Delete) için kolay ve anlaşılır bir API sağlar. Bu işlemleri gerçekleştirmek için kullanıcı dostu yöntemler sunar.

* 4-Sorgu Oluşturma: Mongoose, veritabanından veri çekmek için zengin bir sorgu API'si sunar. Bu API ile karmaşık sorgular oluşturabilir, filtreleme, sıralama ve gruplama gibi işlemleri kolayca gerçekleştirebilirsiniz.

* 5-Middleware Desteği: Middleware'ler, belirli olaylar (örneğin, kaydetme öncesi veya sonrası) gerçekleştiğinde çalışan işlevlerdir. Mongoose, bu tür middleware'leri tanımlamanıza ve veritabanı işlemlerini özelleştirmenize olanak tanır.

* 6-İlişki Yönetimi: Mongoose ile belirli modeller arasında ilişkiler kurabilirsiniz. Örneğin, belirli bir modeldeki veri, başka bir modeldeki veriye referans olabilir.

+ Mongoose, Node.js projelerinde MongoDB veritabanıyla çalışmayı daha kolay ve yapılandırılmış hale getirmek için oldukça yaygın bir şekilde kullanılan bir kütüphanedir. Kullanımı, veritabanı işlemlerini basitleştirmek ve düzenlemek isteyen geliştiriciler için önerilir.
*/
