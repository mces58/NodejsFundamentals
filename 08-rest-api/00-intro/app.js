const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world"); // daha önceki derslerdeki render işlemini kullanıyorduk. Burada ise send kullanıyoruz. Send ile bundan sonra veri göndereceğiz.
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*
? REST API Nedir?
+ REST (Representational State Transfer), bir yazılım mimarisi stili olarak ortaya çıkmış bir kavramdır ve genellikle dağıtık sistemlerde kullanılan bir API (Application Programming Interface) türüdür. REST, özellikle web servisleri aracılığıyla veri iletişimi ve paylaşımı için yaygın olarak kullanılır.

+ REST API, bir yazılım sistemi içindeki kaynaklara (örneğin, veritabanı kayıtları) erişmek ve bu kaynaklarla etkileşimde bulunmak için kullanılan bir tür arayüzdür. Temel olarak, istemcilerin (örneğin, web tarayıcılar veya mobil uygulamalar) sunucudaki kaynaklarla iletişim kurmasını sağlar.

- REST API'nin temel özellikleri şunlar olabilir:

+ 1. **Kaynaklar (Resources)**: Her kaynak, benzersiz bir URI (Uniform Resource Identifier) ile temsil edilir. Örneğin, bir blog uygulaması için "makaleler" veya "kullanıcılar" gibi kaynaklar olabilir.

+ 2. **HTTP Metodları**: REST API, HTTP protokolünü temel alır ve HTTP metotlarını (GET, POST, PUT, DELETE vb.) kaynaklarla ilişkilendirir. Bu metotlar, kaynaklar üzerindeki işlemleri belirtir. Örneğin, GET metoduyla bir kaynağın bilgilerini alabilirsiniz, POST ile yeni bir kaynak oluşturabilirsiniz.

+ 3. **Temel İlkeler (Principles)**: REST, bazı temel prensiplere dayanır. Bunlar arasında sunucu tarafında durumsuzluk (statelessness), önbellek (caching), katmanlılık (layered architecture) gibi kavramlar bulunur.

+ 4. **Veri Formatları**: REST API, genellikle veri iletişimi için JSON veya XML gibi standart veri formatlarını kullanır. Bu formatlar, verileri yapılandırmak ve istemcilerle sunucular arasında paylaşmak için kullanılır.

+ 5. **İstemci-Sunucu İlişkisi**: REST, istemci ve sunucunun ayrı ayrı geliştirilebileceği ve evraklar (documents), veritabanları ve iş mantığı gibi sorumlulukların net bir şekilde ayrıldığı bir yapı sunar.

* REST API, internet üzerinde veri paylaşımı ve iletişimini kolaylaştırmak için yaygın olarak kullanılan bir standart haline gelmiştir. İstemciler, belirli URI'ler kullanarak sunucu tarafındaki kaynaklara erişebilir ve bu kaynaklar üzerindeki işlemleri gerçekleştirebilir.
*/
