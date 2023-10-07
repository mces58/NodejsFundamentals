/*
? Node.js'de modüller, genellikle dört ana sınıfa ayrılır:

! 1. Builtin Modüller (Yerleşik Modüller): Node.js'nin kendisiyle birlikte gelen modüllerdir. Örneğin, `fs` (dosya sistemi), `http` (HTTP sunucusu), `path` (dosya yolu işlemleri) gibi modüller yerleşik modüllerdir. Bu modüller, Node.js uygulamalarında doğrudan kullanılabilir.

- 2. Dışarıdan İndirilen Modüller: Node.js topluluğu tarafından oluşturulan ve Node Package Manager (npm) aracılığıyla indirilebilen modüllerdir. Bu modüller, çeşitli ihtiyaçları karşılamak için geliştirilmiştir. Örneğin, `express` (web uygulama çerçevesi), `lodash` (yardımcı işlevler kütüphanesi) gibi modüller dışarıdan indirilen modüllere örnektir.

+ 3. Kendi Modülleriniz (Custom Modüller): Node.js'de kendi modüllerinizi oluşturabilirsiniz. Bir JavaScript dosyasında fonksiyonlar, nesneler veya değerler içeren bir modül oluşturabilir ve başka dosyalarda bu modülü kullanabilirsiniz. Kendi modüllerinizi oluşturmak, kodunuzun parçalara ayrılmasını ve yeniden kullanılabilir olmasını sağlar.

* 4. Çekirdek Modülü: Bu, Node.js'nin derlenmiş çekirdek modülleridir. Özel durumlar için kullanılır ve genellikle Node.js'nin iç yapısına erişim sağlar. Bu modüllere örnek olarak `buffer`, `stream`, `crypto` gibi modüller verilebilir. Çekirdek modülleri, Node.js'nin özel özelliklerine doğrudan erişim sağlamak için kullanılır ve genellikle gelişmiş kullanım durumları içindir.
*/
