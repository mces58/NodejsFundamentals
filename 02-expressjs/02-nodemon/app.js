/*
+ nodemon, Node.js tabanlı uygulamaları geliştirirken kullanılan bir geliştirici aracıdır. Adından da anlaşılacağı gibi, "Node Monitor" olarak bilinen nodemon, Node.js uygulamalarını otomatik olarak izler ve herhangi bir dosya değişikliği yapıldığında uygulamayı otomatik olarak yeniden başlatır.

+ Geliştirme sürecinde, uygulamanızı her dosya değişikliğinde manuel olarak yeniden başlatmak yerine nodemon kullanarak sürekli olarak uygulamanızı izletebilir ve değişiklikleri hemen görebilirsiniz. Bu, geliştirme sürecini hızlandırmak ve daha verimli bir şekilde çalışmak için oldukça faydalıdır.

+ Bir uygulamayı nodemon ile çalıştırmak için, terminalde proje dizininde nodemon komutunu çalıştırmanız yeterlidir. nodemon komutu, varsayılan olarak ana dosyanızı (index.js, app.js, veya belirttiğiniz dosya adı) bulmaya ve bu dosyayı Node.js üzerinde çalıştırmaya başlar. Daha sonra nodemon, izlemeye başlar ve herhangi bir dosya değişikliği algıladığında otomatik olarak uygulamayı yeniden başlatır.
*/

// nodemon'u yüklemek için terminalde "npm install nodemon -save-dev" yazıyoruz
// package.json dosyasında bir script yazarak nodemon'nu çalıştırabiliriz (örneğin: "start": "nodemon app.js")
// eğer script yazmadan nodemon'nu çalıştırmak istiyorsak
// terminalde "npx nodemon app.js" yazarak çalıştırabiliriz
