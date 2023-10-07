//! bir önce ki dersimizde request nesnesini işlemiştik burada ise response nesnesini inceleyelim

/*
+ response oluşturmak için kullanılan methodlar
* res.write() -> response'a data yazmak için kullanılır. Bu method birden fazla kez kullanılabilir.
* res.end() -> response'a data yazmayı bitirmek için kullanılır. Bu method sadece bir kez kullanılabilir.
* res.setHeader() -> response'a header eklemek için kullanılır. Bu method birden fazla kez kullanılabilir.
* res.writeHead() -> response'a status code ve header bilgilerini yazmak için kullanılır. Bu method sadece bir kez kullanılabilir.
* res.statusCode -> response'a status code eklemek için kullanılır.
* res.statusMessage -> response'a status message eklemek için kullanılır.
* res.on() -> response'a event eklemek için kullanılır. Bu method birden fazla kez kullanılabilir.
* res.pipe() -> response'a stream eklemek için kullanılır. Bu method sadece bir kez kullanılabilir.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(res);

  // response header bilgilerini düzenliyoruz
  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
  });

  /*
    response header bilgisini böylede düzenleyebiliriz
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.statusMessage = "Basarili";
    */

  res.write(JSON.stringify({ name: "Mehmetcan", surname: "ESER" }));

  // html içeriğide gönderebiliriz ama bunun için response hearder bilgisinde ki content-type text/html yapmalıyız ki
  // gönderdiğimiz bilgiyi html içeriği olarak algılasın
  res.write(`
            <h1>Merhaba</h1>
            <p>Node.js</p>
        `);

  // response header bilgilerini yazdırıyoruz
  console.log(res.statusCode);
  console.log(res.statusMessage);
  console.log(res.headers);

  res.end();
});

server.listen(3000, () => console.log("Server listening on port 3000"));
