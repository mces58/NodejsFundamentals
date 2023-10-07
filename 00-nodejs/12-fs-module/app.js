/*
! fs (File System) modülü, Node.js'de dosya sistemiyle etkileşim sağlamak için kullanılan bir yerleşik modüldür. Bu modül, dosyaları okuma, yazma, oluşturma, silme, taşıma, yeniden adlandırma gibi bir dizi dosya işlemi yapmak için çeşitli fonksiyonlar sağlar.
*/

const fs = require("fs");

//* mkdir fonksiyonu ile yeni bir klasör oluşturulur İkinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, klasör oluşturma işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.mkdir("yeni klasör", (err) => {
//   if (err) console.log(err);
//   else console.log("klasör oluşturuldu");
// });

//* writeFile fonksiyonu ile yeni bir dosya oluşturulur. İlk parametre olarak dosya adı, ikinci parametre olarak dosya içeriği ve üçüncü parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya oluşturma işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.writeFile("yeni dosya.txt", "merhaba", (err) => {
//   if (err) console.log(err);
//   else console.log("dosya oluşturuldu");
// });

//* appendFile fonksiyonu ile var olan bir dosyaya yeni içerik eklenir. İlk parametre olarak dosya adı, ikinci parametre olarak dosyaya eklenecek içerik ve üçüncü parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosyaya ekleme işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.appendFile("yeni dosya.txt", " naber", (err) => {
//   if (err) console.log(err);
//   else console.log("dosya eklendi");
// });

//* readFile fonksiyonu ile var olan bir dosyanın içeriği okunur. İlk parametre olarak dosya adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya okuma işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini ve dosya içeriğini alacak.
// fs.readFile("app.js", "utf8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

//* unlink fonksiyonu ile var olan bir dosya silinir. İlk parametre olarak dosya adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya silme işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.unlink("yeni dosya.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("dosya silindi");
// });

//* rmdir fonksiyonu ile var olan bir klasör silinir. İlk parametre olarak klasör adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, klasör silme işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.rmdir("yeni klasör", (err) => {
//   if (err) console.log(err);
//   else console.log("klasör silindi");
// });

//* rename fonksiyonu ile var olan bir dosya veya klasörün adı değiştirilir. İlk parametre olarak eski adı, ikinci parametre olarak yeni adı ve üçüncü parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya veya klasör adı değiştirme işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.rename("yeni klasör", "yeni klasör 2", (err) => {
//   if (err) console.log(err);
//   else console.log("klasör adı değiştirildi");
// });

//* exists fonksiyonu ile var olan bir dosya veya klasörün var olup olmadığı kontrol edilir. İlk parametre olarak dosya veya klasör adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya veya klasörün var olup olmadığı kontrol edildiğinde çağrılacak ve olası bir hata durumunda hata bilgisini ve var olup olmadığı bilgisini alacak.
// fs.exists("yeni klasör 2", (exists) => {
//   if (exists) console.log("klasör mevcut");
//   else console.log("klasör mevcut değil");
// });

//* stat fonksiyonu ile var olan bir dosyanın veya klasörün bilgilerine erişilir. İlk parametre olarak dosya veya klasör adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya veya klasörün bilgilerine erişildiğinde çağrılacak ve olası bir hata durumunda hata bilgisini ve dosya veya klasörün bilgilerini alacak.
// fs.stat("yeni klasör 2", (err, stats) => {
//   if (err) console.log(err);
//   else console.log(stats);
// });

//* readdir fonksiyonu ile var olan bir klasörün içeriği okunur. İlk parametre olarak klasör adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, klasör okuma işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini ve klasör içeriğini alacak.
// fs.readdir("./", (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

//* copyFile fonksiyonu ile var olan bir dosyanın içeriği başka bir dosyaya kopyalanır. İlk parametre olarak kaynak dosya adı, ikinci parametre olarak hedef dosya adı ve üçüncü parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya kopyalama işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.copyFile("yeni dosya.txt", "yeni dosya 2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("dosya kopyalandı");
// });

//* watch fonksiyonu ile var olan bir dosyanın veya klasörün değişiklikleri izlenir. İlk parametre olarak izlenecek dosya veya klasör adı, ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya veya klasörde değişiklik olduğunda çağrılacak ve olası bir hata durumunda hata bilgisini ve değişiklik bilgisini alacak.
// fs.watch("app.js", (eventType, filename) => {
//   console.log(eventType, filename);
// });

//* createReadStream fonksiyonu ile var olan bir dosyanın içeriği okunur. İlk parametre olarak dosya adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya okuma işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini ve dosya içeriğini alacak.
//? readFile(): Dosyanın tamamını belleğe yükler ve içeriği tampon veya metin olarak döndürür. Küçük dosyalar veya tek seferlik dosya okumaları için uygundur. İşlem tamamlanana kadar diğer işlemleri engeller ve bellekte daha fazla yer kaplar.
//? createReadStream(): Dosyayı akış (stream) olarak okur, dosyayı parçalara bölerek bellekte daha az yer kaplamasını sağlar. Büyük dosyaları daha verimli bir şekilde işlemek için kullanılır. Veri parçaları olaylarla tetiklenir ve parçaları işleyebilirsiniz. İşlem tamamlanana kadar diğer işlemleri engellemez ve bellekte daha az yer kaplar.
// fs.createReadStream("app.js", "utf8").on("data", (read) => console.log(read));

//* createWriteStream fonksiyonu ile var olan bir dosyanın içeriği değiştirilir. İlk parametre olarak dosya adı ve ikinci parametre olarak bir callback fonksiyonu veriyoruz. callback fonksiyonu, dosya değiştirme işlemi tamamlandığında çağrılacak ve olası bir hata durumunda hata bilgisini alacak.
// fs.createWriteStream("app.js", "utf8").write("yeni içerik");
