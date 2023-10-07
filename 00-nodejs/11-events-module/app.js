/*
! events modülü, olay tabanlı programlamayı desteklemek için kullanılır. Bu modül, olayların oluşturulmasını, yayılmasını ve dinlenmesini sağlayan bir yapı sağlar. Bu sayede, bir nesne üzerinde gerçekleşen olaylarla ilgili dinleyiciler tanımlayabilir ve olaylar tetiklendiğinde belirli işlemleri gerçekleştirebilirsiniz.
! events modülü, EventEmitter sınıfını döndürür. Bu sınıf, olayları oluşturma, dinleme ve yayma işlemlerini yönetir
*/

const EventEmitter = require("events");
const emitter = new EventEmitter();

// Olayları Dinlemek
// on() metodu, bir olay dinleyicisi eklemek için kullanılır. Bu metot, iki parametre alır. İlk parametre, dinlenecek olayın adıdır. İkinci parametre ise olay tetiklendiğinde çalıştırılacak olan fonksiyondur.
emitter.on("connection", () => {
  console.log("Bağlantı kuruldu.");
});

// Olayları Tetiklemek
// emit() metodu, bir olayı tetiklemek için kullanılır. Bu metot, iki parametre alır. İlk parametre, tetiklenecek olayın adıdır. İkinci parametre ise olay tetiklendiğinde çalıştırılacak olan fonksiyondur.
emitter.emit("connection");

// Olaylara Parametre Göndermek
// Olaylara parametre göndermek için, emit() metodu ile birlikte olay adından sonra gelen parametreler, olay dinleyicisine parametre olarak gönderilir.
emitter.on("message", (msg) => {
  console.log(`Mesaj: ${msg}`);
});
emitter.emit("message", "Merhaba Can");

// Olaylara Dinleyici Eklemek
// Bir olaya birden fazla dinleyici eklemek için, on() metodu ile birlikte olay adından sonra gelen dinleyici fonksiyonları, olaya dinleyici olarak eklenir.
emitter.on("message2", (msg) => {
  console.log(`Mesaj: ${msg}`);
});
emitter.on("message2", (msg) => {
  console.log(`Mesaj uzunluğu: ${msg.length}`);
});
emitter.emit("message2", "Bir olaya birden fazla dinleyici ekledik");

// Olaylardan Dinleyici Kaldırmak
// Bir olaydan dinleyici kaldırmak için, removeListener() metodu kullanılır. Bu metot, iki parametre alır. İlk parametre, dinlenecek olayın adıdır. İkinci parametre ise olaydan kaldırılacak olan dinleyici fonksiyondur.
const listener = () => {
  console.log("Dinleyici çalıştı");
};
emitter.on("message3", listener);
emitter.emit("message3");

emitter.removeListener("message3", listener);
emitter.emit("message3");

// Olaylara Bir Kez Dinleyici Eklemek
// Belirtilen olay için bir kez dinleyici ekler. Dinleyici, olayın bir kez tetiklenmesinden sonra otomatik olarak kaldırılır. Bu metot, iki parametre alır. İlk parametre, dinlenecek olayın adıdır. İkinci parametre ise olay tetiklendiğinde çalıştırılacak olan fonksiyondur.
emitter.once("message4", () => {
  console.log("Olay bir kez tetiklendi");
});
emitter.emit("message4");
emitter.emit("message4"); // çalışmaz çünkü olay kaldırılmıştır

// Olayların Dinleyici Sayısını Öğrenmek
// listenerCount() metodu, belirtilen olay için tanımlı olan dinleyici sayısını döndürür. Bu metot, bir parametre alır. Bu parametre, dinlenecek olayın adıdır.
console.log(emitter.listenerCount("message2"));

// Belirtilen olay için tüm dinleyicileri dizi olarak döndürür
console.log(emitter.listeners("message2"));

// Tüm olayları dizi olarak döndürür
console.log(emitter.eventNames());

// Bir EventEmitter örneğine eklenen maksimum dinleyici sayısını döndürür
console.log(emitter.getMaxListeners());

// Bir EventEmitter örneğine eklenen maksimum dinleyici sayısını ayarlar
emitter.setMaxListeners(20);
console.log(emitter.getMaxListeners());

// rawListeners(event) metodu, belirtilen olay için kayıtlı olan tüm dinleyicileri dizi olarak döndürür. Bu metodun dönüş değeri, olaya eklenmiş olan tüm dinleyicileri içeren bir dizi olacaktır
console.log(emitter.rawListeners("message2"));
