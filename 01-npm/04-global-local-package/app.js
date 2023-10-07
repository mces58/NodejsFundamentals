//! bu proje için jquery dependency ekledik lakin bu dependeny sadece bu proje bazlı başka bir proje de kullanılmaz
//! bu yüzden bu dependency global değil localdir
//! bu yüzden bu dependencyi global olarak yüklemek için npm install jquery -g komutunu kullanmalıyız

//? -g şeklinde bir indirme yaparsak o dependeny projeye(local) yüklenmez bilgisayara(global) yüklenir
//? bu yüzden bu dependencyi global olarak yüklemek için npm install jquery -g komutunu kullanmalıyız
//? global olarak indirilen dependeny bilgisi artık package.json dosyasında dependeny bölümüne eklenmez
//? bu yüzden global olarak indirilen dependency'ler package.json dosyasında görünmez
//? bu global paketleri görmek için
//? npm list -g --depth=0 ya da npm list -g komutunu yazarak görebiliriz
//? depth=0 sadece paket isimlerini göster deriz bunu yazmazsakda olur
//? paket isimleri yanında paketlerin versiyon bilgileri de gösterilir ve bunlara ait alt paketleri de gösterir
//? npm root -g komutu ile global paketlerin nerede kurulu olduğunu görebiliriz
//? bu global paketleri windows işletim sisteminin tanıması için paketlerin kurulu olduğu yerin path'ni windows'a göstermeliyiz
//? bunun windows arama çubuğuna ortam değişkenleri yazıp paketlerin kurulu olduğu path'i oraya girmeliyiz

//+ devDependency
//+ npm install jquery --save-dev komutu ile jquery'i devDependency olarak yüklenir
//+ bu şekilde yüklenen dependency'ler package.json dosyasında dependencies bölümüne eklenir
//+ bu şekilde yüklenen dependency'ler sadece geliştirme aşamasında kullanılır
//+ bu şekilde yüklenen dependency'ler production aşamasında kullanılmaz
//+ yani prjode bittikten sonra npm install komutu ile bu projeyi başka bir bilgisayara kurduğumuzda
//+ bu şekilde yüklenen dependency'ler kurulmaz
//+ bu şekilde yüklenen dependency'ler sadece geliştirme aşamasında kullanılır

//- bu dependency'lerin versiyon numaraları vardır
//- örnek olarak indirdiğimiz jquery için versiyon numarası ^3.7.0 şeklindedir
//- bu versiyon numaraları major.minor.patch şeklindedir
//- major versiyon numarası değişirse bu dependency'lerin yeni bir versiyonu çıkmış demektir
//- minor versiyon numarası değişirse bu dependency'lerin yeni bir özelliği eklenmiş demektir
//- patch versiyon numarası değişirse bu dependency'lerin yeni bir hatası düzeltilmiş demektir
//- bu versiyon numaraları major.minor.patch şeklindedir
//- ^3.7.0 şeklindeki versiyon numarasında ^ işareti major versiyon numarasının değişmesine izin verir
//- ~3.7.0 şeklindeki versiyon numarasında ~ işareti minor versiyon numarasının değişmesine izin verir
//- 3.7.0 şeklindeki versiyon numarasında ise major ve minor versiyon numaralarının değişmesine izin vermez
//- npm install jquery@3 komutu ile jquery'in 3. versiyonunu yükleriz

//* peki projeden bir paketi kaldırmak istersek ne yapacağız
//* npm uninstall jquery komutu ile jquery'i kaldırırız
//* npm uninstall jquery --save-dev komutu ile jquery'i devDependency olarak kaldırırız
//* npm uninstall jquery -g komutu ile jquery'i global olarak kaldırırız

//! npm update jquery komutu ile jquery'i güncelleriz
//! npm update jquery --save-dev komutu ile jquery'i devDependency olarak güncelleriz
//! npm update jquery -g komutu ile jquery'i global olarak güncelleriz

//? npm outdated komutu ile projemizdeki dependency'lerin güncel olup olmadığını kontrol ederiz
//? npm outdated --depth=0 komutu ile projemizdeki dependency'lerin güncel olup olmadığını kontrol ederiz

//+ npm help nedir
//+ npm help komutu ile npm ile ilgili yardım alabiliriz
//+ npm help install komutu ile npm install komutu ile ilgili yardım alabiliriz
//+ npm help outdated komutu ile npm outdated komutu ile ilgili yardım alabiliriz
