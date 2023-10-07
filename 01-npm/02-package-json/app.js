//! package json nedir?
//? package.json dosyası, bir projenin kök dizininde bulunan ve proje hakkında bilgileri içeren bir dosyadır.
//? Bu dosya, projenin adı, versiyonu, açıklaması, geliştiricileri, bağımlılıkları ve diğer birçok bilgiyi içerir.
//? Bu dosya, projenin bir npm projesi olduğunu belirtir.
//? package.json dosyası, npm tarafından kullanılan bir dosyadır.

//* package.json dosyası oluşturmak için terminalde npm init komutunu kullanabiliriz.
//* npm init komutu ile package.json dosyası oluşturulur.
//* npm init -y komutu ile package.json dosyası oluşturulur ve tüm sorular varsayılan olarak cevaplanır.

//- package.json dosyası oluşturulduktan sonra, package.json dosyası içerisindeki bilgileri güncelleyebiliriz.
//- package.json dosyası içerisindeki bilgileri güncellemek için terminalde npm init komutunu kullanabiliriz.
//- npm init komutu ile package.json dosyası içerisindeki bilgiler güncellenir.

//+ bu package.json dosyanı java'da ki pom.xml dosyasına benzetebiliriz
//+ pom.xml dosyasında da dependency(bağımlılıkları) kontrol ediyor ve import ediyorduk
//+ burada da package.json dosyasında da dependency(bağımlılıkları) kontrol ediyor ve import ediyoruz

//! şimdi bu package.json dosyasında ki içeriği biraz inceleyelim
/*
{
  "name": "02-package-json",
  "version": "1.0.0",
  "description": "Bu bir denemedir",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "can": "echo 'Merhaba ben Mehmetcan, bu benim özel kodum.'"
  },
  "keywords": [
    "react",
    "angular",
    "js"
  ],
  "author": "Mehmetcan ESER",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/mces58/JavaEssentials.git"
  },
  "bugs": {
    "url": "https://github.com/mces58/JavaEssentials/issues"
  },
  "homepage": "https://github.com/mces58/JavaEssentials#readme"
}

*/

//? name: projenin adı

//* version: projenin versiyonu
//* versiyonlar 3 kısımdan oluşur
//* bu versiyon numaraları major.minor.patch şeklindedir
//* major versiyon numarası değişirse bu paketin yeni bir versiyonu çıkmış demektir
//* minor versiyon numarası değişirse bu yeni paketin bir özelliği eklenmiş demektir
//* patch versiyon numarası değişirse bu paketin yeni bir hatası düzeltilmiş demektir
//* 1.0.0 şeklindeki versiyon numarasında ise major ve minor versiyon numaralarının değişmesine izin vermez
//* ^1.0.0 şeklindeki versiyon numarasında ^ işareti major versiyon numarasının değişmesine izin verir
//* ~1.0.0 şeklindeki versiyon numarasında ~ işareti minor versiyon numarasının değişmesine izin verir

//- description: projenin açıklaması

//+ main: projenin ana dosyasını belirtir(bu proje için app.js dosyasını verdik)

//! scripts: projenin çalıştırılabilir scriptlerini belirtir. Bunun anlamı şu terminalde çalıştırılabilir kodlardır yani.
//! terminalde npm run test komutunu çalıştırabiliriz. Bu komutu çalıştırdığımızda terminalde "Error: no test specified" yazısını göreceğiz.
//! ekstra kendimize özel kodlarda yazabiliriz sonradan eklemek mümkündür
//! "can": "echo 'Merhaba ben Mehmetcan, bu benim özel kodum.'" böyle bir kod ekledim bunu terminalde npm run can dediğimde çalışacak

//? keywords: projenin anahtar kelimelerini belirtir neyle ilgili ise örneğin react, angular...

//* author: projenin yazarıdır

//- license: projenin lisansını belirtir

//+ repository: projenin kaynak kodlarının bulunduğu yeri belirtir
//+ type: projenin kaynak kodlarının bulunduğu yerin tipini belirtir
//+ url: projenin kaynak kodlarının bulunduğu yerin url'sini belirtir
//+ type git, svn, mercurial, cvs, bzr, darcs, fossil, hg, mtn, baz, bazaar, monotone, monotone, codeville, svk, arch, tla, arx, bazaar-ng, brz, bup, git-cvsserver, git-svn, gitosis, hgsubversion, hgsvn, hg-git, hg-git, hgsubversion, hgsvn, hg-gi gibi değerler alabilir

//! bugs: projenin hatalarının bildirileceği yerin url'sini belirtir

//? homepage: projenin anasayfasının url'sini belirtir

//* package.json dosyası içerisindeki bilgileri güncellemek için terminalde npm init komutunu kullanabiliriz.
//* npm init komutu ile package.json dosyası içerisindeki bilgiler güncellenir.
