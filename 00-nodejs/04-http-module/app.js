/*
! http modülü, HTTP sunucu ve istemci işlemleri gerçekleştirmek için kullanılan bir modüldür. Bu modül, web uygulamalarının geliştirilmesinde yaygın olarak kullanılan HTTP protokolünü destekler.

! http modülü, http.createServer() fonksiyonunu kullanarak HTTP sunucusu oluşturmanızı sağlar. Bu sunucu, gelen istekleri dinler ve yanıtlar oluşturarak istemcilere gönderir. Aynı şekilde, http.request() fonksiyonunu kullanarak HTTP istemcisi oluşturabilir ve istemci tarafından sunucuya istekler gönderebilirsiniz.
*/
const http = require("http");

//- HTTP sunucusu oluşturur. İsteğe bağlı olarak options ve requestListener parametreleri alır. requestListener, her gelen istek için çağrılan bir callback fonksiyondur. Sunucu başlatıldığında belirtilen portta dinlemeye başlar.
//- server objesi bir EventEmitter'dir yani biz buna event ekleyebiliriz.
const server = http.createServer((req, res) => {
  console.log(res); // bir sürü özelliği vardır
  console.log(req); // bir sürü özelliği vardır

  //? http://localhost:3000/ adresine gittiğimizde
  //? req.url = /  olarak gelir
  //? req.method = GET olarak gelir
  if (req.url === "/") {
    // res.write() metodu, yanıtın gövdesine veri eklemek için kullanılır. Bu metot, isteğe bağlı olarak bir kodlama parametresi alır. Varsayılan olarak, yanıtın kodlaması UTF-8'dir.
    res.write("Root Directory");
    res.end(); // res.end() metodu ile yanıtın gövdesine eklenen verileri gönderir ve yanıtı kapatır.
  }

  //? bu endpointe gittiğimizde
  //? req.url = /api/products  olarak gelir
  //? req.method = GET olarak gelir
  if (req.url === "/api/products") {
    res.write("Products");
    res.end();
  }
});

//+ Sunucuyu belirtilen portta dinlemeye başlar. Dinleme başladığında, sunucu başlatıldığında çağrılan bir işlevi de alır.
//+ localhost:3000 portunu çalıştırmalısın.
server.listen(3000, () => console.log("Server listening on port 3000"));
