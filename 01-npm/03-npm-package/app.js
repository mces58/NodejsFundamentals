//! npmjs sitesine giderek oradan hangi dependency ihtiyaç duyuyorsan indirme koduna bakarak terminalden indirebilirsin
//! örneğin bootstrap dependency için npm i/install bootstrap yazarak indirebilirsin
//! npm i/install bootstrap@4 yazarak da sürüm belirtebilirsin

//- bu indirme işleminden sonra package.json kendini günceller ve dependeny bölümüne bootstrap'ı ekler
//- bu indirme işleminden sonra node_modules klasörü oluşur ve içerisinde bootstrap'ın dosyaları oluşur

//? bu indirme işleminden sonra bootstrap'ı kullanmak için app.js dosyasında import etmemiz gerekir
//? import etmek için app.js dosyasında require('bootstrap') yazmamız gerekir
//? bu işlemi yaptıktan sonra bootstrap'ı kullanabiliriz

//+ örnek bir tane daha dependency ekleyelim bu da underscore olsun
//+ npm i/install underscore yazarak indirebilirsin

// var bootstrap = require("bootstrap");
var _ = require("underscore");

let numbers = [10, 32, 436, 65, 3];

console.log(_.min(numbers));

//* hangi fonksiyonlar var ve ne işe yarıyor diye merak ediyorsan
//* npmjs sitesine girip arama kısmına underscore yazarak aratabilirsin
//* arama sonucunda çıkan sayfada fonksiyonların ne işe yaradığını görebilirsin
//* ya da underscore içinde amd veya cjs klasörü içinde fonksiyonlar var
//* bu fonksiyonların içindeki js dosyalarını açarak ne işe yaradığını görebilirsin

console.log(_.size(numbers));

//! farkettiysen underscore modulu 22.5 k
//! bootstrap modulu 60.2 k
//! bu moduller çok büyük boyutlarda
//! proje büyüdükçe node_modules klasörünün de boyutu artacak server'a göndermemiz oldukça zorlaşacak
//! bu yüzden node_modules klasörünü sildiğimizde hangi bağlımlılıkların olduğu kaybolmayacak
//! bunun sebebi package.json dosyasında dependencies bölümünde bağlımlılıkların olması
//! bu bağlımlılıkları package.json dosyasında dependencies bölümünden görebilirsin
//! node_modules sildiğimizde bütün dependency'leri tekrardan indirmek için npm install yazmamız yeterli
//! npm install yazdığımızda package.json dosyasındaki dependencies bölümündeki bağlımlılıklar tekrardan indirilecek
