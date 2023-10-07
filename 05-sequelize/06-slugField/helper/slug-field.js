const slugify = require("slugify");

const options = {
  replacement: "-", // replace spaces with replacement
  remove: null, // regex to remove characters
  lower: true, // result in lower case
  strict: true, // strip special characters except replacement
  locale: "tr", // language code of the locale to use
  trim: true, // trim leading and trailing replacement chars
};

module.exports = (text) => {
  return slugify(text, options);
};

/*
+ Slugify, metin tabanlı verileri URL dostu bir formata dönüştürmek için kullanılan bir işlemdir. Genellikle web siteleri veya uygulamalarda, kullanıcı tarafından girilen başlıklar, kategoriler veya diğer metin içerikleri, URL'lerde kullanılabilecek uygun bir formata getirilir. Bu sayede URL'ler daha anlaşılır, okunabilir ve SEO dostu olur.

- Slugify, genellikle şu işlevleri yerine getirir:

* 1-Boşlukları ve Özel Karakterleri Kaldırma: Başlıklarda veya metinlerde bulunan boşluklar, işaretler (örneğin, virgül, noktalama işaretleri) veya diğer özel karakterler, URL'lerde sorun yaratabilir. Slugify, bu tür karakterleri kaldırarak temiz bir URL üretir.

* 2-Tüm Harfleri Küçültme: Slugify, metinleri genellikle küçük harflerle dönüştürerek, büyük ve küçük harf hassasiyetini ortadan kaldırır. Bu sayede tutarlı ve öngörülebilir URL'ler elde edilir.

* 3-Unicode Karakterleri Temizleme: Bazı dillerde veya metinlerde Unicode karakterleri bulunabilir. Bu karakterler, standart URL kodlamasıyla uyumsuz olabilir. Slugify, bu karakterleri uygun bir şekilde temizler veya değiştirir.

* 4-Türkçe Karakterleri Düzeltme: Türkçe gibi dillerde kullanılan özel harfler (öğe, şık, çamur vb.), bazı durumlarda URL'lerde sorun yaratabilir. Slugify, bu harfleri uygun şekilde değiştirerek sorunları giderir.

* 5-Diğer Dil Dönüşümleri: İhtiyaç durumuna göre, farklı dillerdeki karakterleri uygun dönüşümlerle değiştirebilir.

+ Sonuç olarak, Slugify, metin tabanlı verileri temiz, anlaşılır ve URL dostu bir formata dönüştürerek web sitelerinin ve uygulamaların daha iyi kullanıcı deneyimi ve SEO performansı sunmasına yardımcı olur.
*/
