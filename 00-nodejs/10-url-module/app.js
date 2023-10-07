/*
! url modülü, URL (Uniform Resource Locator) işlemlerini kolaylaştırmak için Node.js'te kullanılan bir yerleşik modüldür. Bu modül, URL'leri ayrıştırmak, oluşturmak ve işlemek için çeşitli fonksiyonlar sağlar.
*/

/*
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
*/

const url = require("url");

const myURL =
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";

// bir URL dizesini ayrıştırarak bileşenlerine ayırır ve bir URL nesnesi döndürür.
// İsteğe bağlı olarak parseQueryString parametresini true olarak ayarlarsanız, sorgu dizgisini(query) ayrıştırarak bir nesne olarak alabilirsiniz.
let result = url.parse(myURL, true);
console.log(result);

// url'de ki hash kısmını getirir
result = new URL(myURL).hash;
console.log(result);

// url'de ki origin kısmını getirir
result = new URL(myURL).origin;
console.log(result);

// url'de ki protocol kısmını getirir
result = new URL(myURL).protocol;
console.log(result);

// url'de ki username kısmını getirir
result = new URL(myURL).username;
console.log(result);

// url'de ki password kısmını getirir
result = new URL(myURL).password;
console.log(result);

// url'de ki pathname kısmını getirir
result = new URL(myURL).pathname;
console.log(result);

// url.parse() ile ayrıştırılan bileşenleri içeren bir URL dizesi oluşturmak için kullanılır.
result = url.format(myURL);
console.log(result);

// İki URL'yi birleştirerek yeni bir URL oluşturur. İlk URL (from) ile ikinci URL (to) arasında birleştirme işlemi gerçekleştirir.
result = url.resolve("https://example.com/", "/one");
console.log(result);

// Alan adını (domain) ASCII formatına dönüştürür. Örneğin, Unicode karakterler içeren bir alan adını ASCII formatına dönüştürebilirsiniz.
result = url.domainToASCII("eskişehir.com");
console.log(result);

// Alan adını (domain) Unicode formatına dönüştürür. Örneğin, ASCII karakterler içeren bir alan adını Unicode formatına dönüştürebilirsiniz.
result = url.domainToUnicode("xn--eskiehir-qwb.com");
console.log(result);
