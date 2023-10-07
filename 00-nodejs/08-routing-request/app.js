/*
+ Örneğin, bir web uygulamasında "ana sayfa", "hakkımızda", "iletişim", "ürünler" gibi farklı sayfalar olabilir ve bu sayfaların her biri belirli URL yollarına (örneğin, /, /about, /contact, /products) sahip olabilir. Bu sayfalar için farklı istekleri işlemek ve ilgili içeriği göstermek için routing mekanizması kullanılır.

+ Routing, bir web sunucusunun gelen HTTP isteklerini belirli işlevlere veya uygulama parçalarına yönlendirmesi işlemidir. Yani, gelen istekleri, belirli URL yollarına ve HTTP yöntemlerine (GET, POST, PUT, DELETE vb.) göre farklı işlevler veya işlem bloklarına bağlama sürecidir. Bu işlem, web uygulamalarınızın farklı sayfaları veya verileri işlemesi için yönlendirme mantığı eklemeyi sağlar.

+ Aşağıda ki örnekte ise yapılan isteklere göre bir yönlendirme yapılmaktadır. En basit anlamıyla routing budur.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>Index Sayfasına Hoşgeldiniz</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>Hakkımızda Sayfasına Hoşgeldiniz</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plan; charset=utf-8" });
    res.write("<h2>İletişim Sayfasına Hoşgeldiniz</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h2>404 Sayfa Bulunamadı</h2>");
  }

  res.end();
});

server.listen(3000, () => console.log("Server is running on port 3000"));
