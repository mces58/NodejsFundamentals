const Sequelize = require("sequelize");

const config = {
  host: "localhost",
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  database: "YOUR_DATABASE",
  port: 3306,
  define: {
    timestamps: false, // tüm tablolarda createAt ve updateAt alanları oluşmaz
  },
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "mysql",
  define: config.define,
}); // sequelize objesi oluşturuldu

module.exports = sequelize; // sequelize objesi dışarı aktarıldı

/*
+ Sequelize, JavaScript programcılarının ilişkisel veritabanlarıyla etkileşim kurmasını kolaylaştıran bir ORM (Object-Relational Mapping) kütüphanesidir. ORM'ler, veritabanlarındaki tabloları ve ilişkileri, JavaScript nesneleri ve sınıflarıyla eşleştiren bir yazılım tabanlı yaklaşımdır. Sequelize, özellikle Node.js tabanlı uygulamalar için MySQL, PostgreSQL, SQLite ve MSSQL gibi popüler ilişkisel veritabanları ile çalışırken tercih edilen bir seçenektir.

- Sequelize kütüphanesinin kullanımına yönelik bazı nedenler şunlar olabilir:

* 1-Veritabanı Etkileşimi Kolaylığı: Sequelize, SQL sorgularını elle yazmadan veritabanı işlemlerini gerçekleştirmenizi sağlar. JavaScript nesneleri üzerinden veritabanı tablolarını oluşturabilir, sorgular yapabilir ve güncellemeler gerçekleştirebilirsiniz.

* 2-Cross-DB Uyum: Sequelize, farklı veritabanı sistemleri arasında taşınabilirlik sağlar. Uygulamanızın veritabanını değiştirmek istediğinizde (örneğin, MySQL'den PostgreSQL'ye geçiş), mevcut kodunuzda büyük değişiklikler yapmadan bu geçişi gerçekleştirmenize yardımcı olur.

* 3-Modelleme ve İlişkiler: Sequelize, veritabanı tablolarını JavaScript sınıflarıyla modellemeye izin verir. Bu sayede nesne odaklı programlama prensipleriyle çalışabilirsiniz. Aynı zamanda tablolar arasındaki ilişkileri de kolayca tanımlayabilirsiniz (örneğin, bir kullanıcının birden fazla makalesi olabilir gibi).

* 4-Güvenlik: Sequelize, SQL enjeksiyon saldırılarına karşı koruma sağlayarak veritabanı işlemlerini daha güvenli hale getirir.

* 5-Validasyon ve Zengin Özellikler: Sequelize, verilerinizi otomatik olarak doğrulayabilir ve geçerlilik kurallarını uygulayabilir. Ayrıca, sorgularınızı özelleştirebileceğiniz ve kompleks işlemleri gerçekleştirebileceğiniz zengin özellikler sunar.

* 6-Migrasyonlar: Sequelize, veritabanınızda yapısal değişiklikler yapmanızı (örneğin, yeni sütunlar eklemek veya mevcut sütunları değiştirmek) ve bunları kolayca yönetmenizi sağlayan migrasyon araçları sunar.

* 7-Asenkron İşlemler: Node.js tabanlı uygulamalar asenkron çalışır. Sequelize de bu asenkron yapının doğasına uygun olarak tasarlanmıştır, böylece veritabanı işlemleri uygulamanızın performansını düşürmeden gerçekleştirilebilir.
*/
