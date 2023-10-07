/*
+ express.Router Express.js çerçevesinde, web uygulamalarınızda yönlendirme (routing) mantığını modülerleştirmek için kullanılan bir sınıftır. express.Router, belirli bir alt yol (route prefix) altında gruplandırılmış yönlendirmeleri oluşturmak için kullanılabilir. Bu sayede, web uygulamanızı farklı bölümlere ayırarak yönetilebilir ve düzenlenebilir hale getirebilirsiniz.

+ express.Router kullanımı, büyük ölçekli veya modüler web uygulamaları için oldukça faydalıdır. Bir router oluşturduğunuzda, bu router üzerine çeşitli HTTP yöntemlerine (GET, POST, PUT, DELETE vb.) göre işlevleri ekleyebilirsiniz. Bu işlevler, o router altındaki belirli bir yol için taleplere cevap verecektir.
*/

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("<a href='/admin/add-product'>Ürün ekle</a>");
});

router.get("/add-product", (req, res, next) => {
  res.send(`
          <html>
              <head>
              <title>Add Product</title>
              </head>
              <body>
              <form action="/admin/add-product" method="POST">
                  <input type="text" name="productName" />
                  <button type="submit">Send</button>
              </form>
          </html>
          `);
});

// endpointler aynı olabilir lakin metotlar farklı
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router; // dışarıya router'ı açtık
