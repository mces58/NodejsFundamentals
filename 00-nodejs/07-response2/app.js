const http = require("http");
const queryString = require("querystring");
/*
! querystring, Node.js'de yerleşik olarak bulunan bir modüldür. Bu modül, URL'lerdeki sorgu parametrelerinin işlenmesini ve düzenlenmesini sağlar. URL'lerdeki sorgu parametreleri, genellikle anahtar-değer çiftleri şeklinde olup, istemci tarafından sunucuya veri göndermek için kullanılır.

! querystring modülü, sorgu parametreleri içeren bir dizeyi çözerek (parsing) ve aynı zamanda bir nesne olarak sunarak verilerin daha kolay erişilmesini ve işlenmesini sağlar. Aynı şekilde, bir nesne içerisindeki verileri de URL'lerde kullanılmak üzere dize olarak kodlama (stringify) işlemine tabi tutabilir.
*/

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
  });

  if (req.url == "/") {
    res.write(`
        <html>
            <head>
                <title>Merhaba</title>
            </head>
            <body>
                <form method="post" action="/log">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `);
    res.end();
  }

  // formda action bilgisi "/log" olarak verilmiş
  // method bilgisi de post olarak verilmiş
  // bu yüzden burası tetiklenecek
  if (req.url == "/log" && req.method == "POST") {
    const body = [];

    // on() metodu ile olay atanabilir, veri alınır
    req.on("data", (chunk) => {
      body.push(chunk); // veri alındığında body dizisine eklenir
    });

    let myMessage = "";
    // veri alımı bittiğinde tetiklenir
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // body dizisindeki veriler birleştirilir ve string'e çevrilir
      myMessage = queryString.parse(parsedBody).message;
      console.log(myMessage);
      res.write("Log Page </br>");
      res.write("Message: " + myMessage);

      res.end();
    });
  }
});

server.listen(3000, () => console.log("server dinleniyor"));
