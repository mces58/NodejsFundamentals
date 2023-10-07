let firstName = "mehmetcan";
let lastName = "Eser";
let age = 22;

let getInfo = () => {
  return `My name is ${firstName} ${lastName} and I'm ${age} years old`;
};

/*
! Biz js'de IIFE(module pattern) kullanarak başka dosyalardan gelen global değişkenlerin ezilmesini hemde bazı alanları private bazı
! alanları da public yapıyorduk Ama node js'de IIFE yapısını direkt kullanamıyoruz
! node'da bu işlemi yapmak için module.exports objesini kullanıyoruz

! boylece diğer dosyalardan belirttiğimiz public alanlara ulaşabiliyoruz
*/

module.exports = {
  firstName,
  getInfo,
};
//* exports nesnesi ile firstName ve getInfo alanlarını public yaptık ve app.js dosyasından şimdi bunlara ulaşalım

console.log(module);
