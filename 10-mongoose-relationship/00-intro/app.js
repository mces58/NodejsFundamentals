/*

* MongoDB, bir NoSQL veritabanı sistemidir ve ilişkisel veritabanı sistemlerine göre farklı bir veri modeline sahiptir. İlişkiler (relationships) kavramı, MongoDB'da ilişkisel veritabanlarındaki gibi tablolar arasındaki ilişkileri ifade etmek yerine, belge tabanlı veri modeline göre düşünülmelidir.

- İlişkiler yerine MongoDB'da kullanılan terimler şunlardır:

+ 1-Belge (Document): MongoDB'da temel veri birimi belgelerdir. Her belge, JSON benzeri bir formatla temsil edilir ve verileri taşır.

+ 2-Koleksiyon (Collection): Koleksiyonlar, belgelerin mantıksal gruplamalarını temsil eder. Koleksiyonlar ilişkisel veritabanlarındaki tablolara benzese de, belgeler arasında sıkı bir şema gereksinimi yoktur.

* MongoDB'da geleneksel ilişkisel veritabanlarında olduğu gibi kesin ilişkiler (joins) yoktur. Ancak, MongoDB'da verileri ilişkilendirmek ve sorgulamak için bazı yaklaşımlar vardır:

- 1-Yerleşik Belge:
+ Bu yaklaşımda, bir belgede diğer belgenin tüm veya bir kısmı gömülü olarak bulunabilir. Bu, verilerin tek bir sorgu ile alınmasını sağlar ancak büyük veri setlerinde veri tekrarı sorunu doğurabilir.

- 2-İşaretçi (Reference):
+ Bu yöntemde, bir belge başka bir belgeyi referans alabilir. Referans alınan belge daha fazla ayrıntı sağlar ve başka bir koleksiyonda bulunur. Ancak bu durumda ekstra sorgular gerekebilir.

* MongoDB'da ilişkileri ifade etmek için kullanılan bu temel yaklaşımların çeşitli kombinasyonları yapılabilmektedir. Önemli olan, veri modelini ve sorgu ihtiyaçlarını göz önünde bulundurarak en uygun yaklaşımı seçmektir.

*/

// Daha detaylı açıklamalar için aşağıya bakabilirsiniz:

/*

1-Yerleşik Belge (Embedded Documents):
Bu yaklaşım, bir belge içinde başka belgeleri gömerek ilişkileri temsil eder. Örneğin, bir kullanıcı belgesi içinde o kullanıcının gönderdiği mesajları içeren bir dizi belge bulunabilir. Bu şekilde, kullanıcıya ait mesajlar bir sorguda alınabilir. Ancak, mesajları güncellemek veya silmek gibi durumlarda tüm kullanıcı belgesinin güncellenmesi gerekebilir.

Örnek JSON formatında bir kullanıcı belgesi:
{
  "_id": 1,
  "username": "exampleuser",
  "messages": [
    {
      "message_id": 101,
      "content": "Hello, world!"
    },
    {
      "message_id": 102,
      "content": "Another message."
    }
  ]
}
*/

/*
2-İşaretçi (Reference):
Bu yaklaşım, bir belge içinde başka bir belgeyi referans olarak saklar. Örneğin, kullanıcı belgesinde gönderilen mesajlar yerine bu mesajların _id değerleri veya referansları bulunur. Mesajlar ayrı bir koleksiyonda depolanır ve ilişkili _id'ler referans olarak kullanılır. Bu sayede veri tekrarı önlenir ancak sorgularda ekstra adımlar gerekebilir.

Kullanıcı Belgesi:
{
  "_id": 1,
  "username": "exampleuser",
  "messages": [101, 102]
}

Mesaj Belgesi:
{
  "_id": 101,
  "content": "Hello, world!"
}
{
  "_id": 102,
  "content": "Another message."
}
*/

/*

Bu temel yaklaşımların dışında, karmaşıklığı daha da artıran yöntemler de kullanılabilir. Örneğin, "Denormalizasyon" adı verilen bir yaklaşım, bazı verileri tekrarlayarak performansı artırabilir, ancak veri bütünlüğünü zorlaştırabilir. Ayrıca, "Aggregation Framework" adı verilen bir özellik sayesinde birden fazla koleksiyondaki verileri birleştirerek kompleks sorgular yapabilirsiniz.

MongoDB'da ilişkisel veritabanlarından farklı olarak, veri modeli ve sorgulama ihtiyaçlarınıza en iyi şekilde uyan yaklaşımı seçmek esastır. Veri modelinizi tasarlarken, veri bütünlüğünü, sorgu performansını ve veri erişimini dikkate almanız önemlidir.

*/
