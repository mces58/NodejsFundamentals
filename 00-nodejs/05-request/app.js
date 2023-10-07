/*
! http server'ın görevi kendisine gelen request'i işler ve bunun sonucunda kullanıcıya bir response gönderir. Burada oluşturulan request ve response http protokolüne uygun olarak oluşturulur. Bu protokolde request ve response'lar birer stream'dir(aktarımdır).
*/

/*
+ request oluşturmak için kullanılan methodlar
* req.on() -> request'a event eklemek için kullanılır. Bu method birden fazla kez kullanılabilir.
* req.pipe() -> request'a stream eklemek için kullanılır. Bu method sadece bir kez kullanılabilir.
* req.url -> request'un url bilgisini almak için kullanılır.
* req.method -> request'un method bilgisini almak için kullanılır.
* req.headers -> request'un header bilgisini almak için kullanılır.
* req.httpVersion -> request'un http versiyon bilgisini almak için kullanılır.
* req.statusCode -> request'un status code bilgisini almak için kullanılır.
* req.statusMessage -> request'un status message bilgisini almak için kullanılır.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);

  //- get metotlarında header kısmı varken post metotlarda hem header hemde body kısmı vardır
  console.log("url: " + req.url);
  console.log("metot tipi: " + req.method);
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.statusCode);
  console.log(req.statusMessage);

  //? kullanıcıya response ederken response ait header bilgilerini düzenleyebiliriz
  //? response ederken kullanıcıya 404 hata kodunu ve gönderdiğimiz bilginin içerik bilgisini text/plain(boş sayfa) olarak belirtebiliriz
  //? bu göndereceğimiz response'un üst bilgisini ayarlarken setHeader() fonksiyonu da kullanılabilir
  //? bu response ve request üst bilgilerini tarayıcının network kısmında görebilirsin
  res.writeHead(404, {
    "content-type": "text/plain; charset=utf-8",
  });

  //? write ile kullanıcıya iletmek istediğimiz mesajı iletebiliriz
  res.write("Hello World");

  res.end();
});

server.listen(3000, () => console.log("Server is listening on port 3000"));
