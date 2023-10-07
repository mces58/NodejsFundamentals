//! console.log(window);
//! console.log(document);
//! alert("Hello World");
//! console.log(navigator);

//? bu nesneler hata verir bu nesneler tarayıcıya özgü nesneler
//? node js olarak çalıştırmak hatalıdır

//* nodejs içinde farklı dosyalarda çalışmak için module kavramını bilmek gerekir
//* module kavramı js dosyalarını birbirine bağlayan bir yapıdır
//* module kavramı sayesinde js dosyaları birbirine bağlanır ve birbirinden haberdar olur

//- nodejs içinde window nesnesi olmadığı için bunun yerine global nesnesi kullanılır
//- global nesnesi nodejs içindeki window nesnesinin karşılığıdır
//- global nesnesi içindeki console.log() metodu ile konsola yazdırma işlemi yapılır
//- global nesnesi içindeki setTimeout() metodu ile zamanlayıcı işlemi yapılır
//- global nesnesi içindeki setInterval() metodu ile zamanlayıcı işlemi yapılır

console.log(global);

let firstName = "mehmetcan";

//+ global nesnesi üzerinden değişkene ulaşma
console.log(global.firstName);

//+ lakin undefined değer verdi neden?
//+ nodejs içindeki global nesnesi içindeki değişkenlere erişim izni yoktur
//+ global nesnesi içindeki değişkenlere erişim izni için global nesnesi üzerinden değişkene değer atama işlemi yapılmalıdır

//+ global nesnesi üzerinden değişkene değer atama
global.firstName = "mehmetcan";

//+ global nesnesi üzerinden değişkene ulaşma
console.log(global.firstName);
