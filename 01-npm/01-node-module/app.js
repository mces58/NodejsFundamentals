//! logger.js dosyasını(modülünü) ilk olarak dahil etmeliyiz
//! require fonksiyonu
//! node js'de modülleri dahil etmek için require fonksiyonunu kullanıyoruz
//! require fonksiyonu ile dahil ettiğimiz modülün exports nesnesine ulaşabiliriz
const logger = require("./logger");

console.log(logger.getInfo());

//* bu modul aktarma işlemine CommonJS Module Syntax denir
//* bu işlemi yaparken dosya uzantısını yazmamıza gerek yok
//* eğer dosya uzantısını yazmazsak node js önce js dosyasını arar eğer bulamazsa js dosyasının uzantısını ekleyerek arar
//* eğer yine bulamazsa hata verir

console.log(module);

//+ module objesi ile node js'de bulunan modül bilgilerine ulaşabiliriz
//+ bu dosyanın module exports kısmı boş çünkü herhangi bir şeyi export(public) etmedik
//+ ama logger.js'de böyle değil çünkü orada firstName ve getInfo'yu exports(public) ettik

//- module içinde ki bilgilere de ulaşabiliriz
console.log(module.path);
console.log(__filename);
console.log(__dirname);
