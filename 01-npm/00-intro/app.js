/*
! node js kodlarını çalıştırmak için cmd'yi kullanabiliriz 
! bunun için dosyanın bulunduğu klasöre giderek (node klasör adı) diyerek çalıştırabiliriz 
! ya da vs code terminalinden de aynı şekilde çalıştırabiliriz
*/

console.log("Hello world");

let a = 10;
let b = 20;

console.log(a + b);

// console.log(window);
// console.log(document);

console.log(global);

//? node js yukarıda ki kodaları çalıştırdığında hata verir
//? çünkü node js tarayıcı üzerinde çalışmaz
//? node js tarayıcı üzerinde çalışmadığı için window ve document objelerine erişemez
//? bu objeler tarayıcı üzerinde bulunan objelerdir

//* node js nedir?
//* node js tarayıcı üzerinde çalışmayan javascript kodlarını çalıştırmamızı sağlayan bir ortamdır
//* node js javascript kodlarını tarayıcı üzerinde çalıştırmaz
//* node js javascript kodlarını tarayıcı üzerinde çalıştırmadığı için tarayıcı üzerinde bulunan objelere erişemez
//* node js javascript kodlarını tarayıcı üzerinde çalıştırmadığı için tarayıcı üzerinde bulunan objeleri kullanamayız

//+ node js ile neler yapabiliriz?
//+ node js ile javascript kodlarını tarayıcı üzerinde çalıştırmadan çalıştırabiliriz

//- node js ile neler yapamayız?
//- node js ile javascript kodlarını tarayıcı üzerinde çalıştıramayız
//- node js javascript kodlarını tarayıcı üzerinde çalıştırmadığı için tarayıcı üzerinde bulunan objelere erişemeyiz
