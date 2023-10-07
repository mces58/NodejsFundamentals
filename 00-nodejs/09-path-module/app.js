/*
! path modülü, dosya yolu işlemleri için kullanılan bir yerleşik modüldür. Bu modül, dosya yollarını birleştirme, çözme, normalleştirme ve ayrıştırma gibi işlemleri gerçekleştirmek için kullanılır.
*/

const path = require("path");

// Verilen dizin veya dosya yollarını, mutlak bir yola çözer. Bu, mevcut çalışma dizininden bağımsız olarak bir yol elde etmenizi sağlar.
let result = path.resolve(__filename); // __filename = app.js'in dosya yolu uzantısı
console.log(result);

// Verilen dosya yolunun uzantısını döndürür.
result = path.extname(__filename); // .js
console.log(result);

// Verilen dosya yolunu, verilen bir kök dizinle birleştirir.
result = path.resolve("/admin/products", "./app"); // C:\admin\products\app
console.log(result);

// Verilen dosya yolunu ayrıştırır. Bu, dizinlerin veya dosyaların ayrıştırılması için kullanılabilir.
result = path.parse(__filename); // { root: 'C:\\', dir: 'C:\\Users\\mces58\\Desktop\\nodejs\\00-nodejs-fundamental\\09-path-module', base: 'app.js', ext: '.js', name: 'app' }
console.log(result);

// Verilen dosya yolunu, platforma özgü bir dosya yoluna dönüştürür.
result = path.toNamespacedPath(__filename); // \\?\C:\Users\mces58\Desktop\nodejs\00-nodejs-fundamental\09-path-module\app.js
console.log(result);

// Verilen dosya yollarını birleştirir. Bu, dizinlerin veya dosyaların birleştirilmesi için kullanılabilir.
result = path.join("C:\\user", "mces58\\dowloads", "temp/asdg", "quux"); // C:\user\mces58\dowloads\temp\asdg\quux
console.log(result);

// Verilen dosya yolunu normalleştirir. Örneğin, geriye dönüşlerin düzeltilmesi ve birden fazla ardışık bölümlerin tek bir bölüme indirgenmesi gibi işlemleri gerçekleştirir.
result = path.normalize(
  "C:\\Users\\\\user\\Documents\\\\project\\..\\file.txt"
); // C:\Users\user\Documents\file.txt .. ile bir üst klasöre çıkılır
console.log(result);

// Verilen yolun mutlak bir yol olup olmadığını belirler. Mutlak yol, kök dizinden başlayan bir yol olarak tanımlanır.
// Bir dosya yolunun mutlak olması, o yolun bir kök dizinle (örneğin, C:\ veya /) başlaması anlamına gelir. Mutlak bir dosya yolunun tam adresini ifade eder ve işletim sisteminden bağımsızdır.
result = path.isAbsolute("./documents/file.txt"); // ./documents/file.txt false iken /documents/file.txt true değer döndürür
console.log(result);

// path.relative(from, to) fonksiyonu, iki dosya yolunun (ya da iki dizin yolu) arasındaki ilişkiyi bulmak için kullanılır. Bu fonksiyon, bir dosya yolunu diğerine göre göreceli bir şekilde ifade etmeye yardımcı olur.
// from parametresi, başlangıç dosya yolunu veya dizin yolunu temsil ederken, to parametresi hedef dosya yolunu veya dizin yolunu temsil eder. path.relative() fonksiyonu, from yolu üzerinden giderek to yolu elde etmeye çalışır ve elde edilen yolu göreceli olarak döndürür.
result = path.relative("/home/user/documents", "/home/user/projects/file.txt"); // ..\projects\file.txt
console.log(result);

// Verilen dosya yolunun temel adını döndürür.
result = path.basename(__filename); // app.js
console.log(result);

// Verilen dosya yolunun kök dizinini döndürür.
result = path.dirname(__filename); // C:\Users\mces58\Desktop\nodejs\00-nodejs-fundamental\09-path-module
console.log(result);

// Dosya yolunu içeren bir nesneyi, bir dize olarak biçimlendirmek için kullanılır. Bu fonksiyon, path.parse() işlevinin tam tersini yapar ve bir dosya yolunu bir nesne olarak çözümlenen halden tekrar dizeye çevirir.
result = path.format({
  root: "/",
  dir: "/home/user/documents",
  base: "app.js",
  ext: ".js",
  name: "app",
}); // /home/user/documents\app.js
console.log(result);
