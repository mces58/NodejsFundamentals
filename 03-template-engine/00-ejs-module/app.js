const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");
const adminRouter = require("./router/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

// Express uygulamasında şablon motorunu ejs olarak ayarlar. Bu sayede, .ejs uzantılı dosyaları kullanarak HTML şablonlarını oluşturabilirsiniz. Ejs, basit ve etkili bir şablon motorudur ve dinamik web sayfalarının oluşturulmasında yaygın olarak kullanılır.
app.set("view engine", "ejs");
// şablon dosyalarının bulunduğu dizini belirler. Bu örnekte, views klasörü şablonların bulunduğu yer olarak ayarlanmıştır. Bu, Express'e hangi klasördeki şablonları araması gerektiğini söyler. Şablon dosyalarınızı views klasörüne yerleştirerek, Express otomatik olarak bu dizindeki şablonları kullanır.
app.set("views", "./view");

app.use(homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("*", errorRouter);

app.listen(3000);
