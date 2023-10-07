module.exports = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // csrf token'ı tüm view'larda kullanabilmek için res.locals'a ekledik
  next();
};

/*
+ csurf (Cross-Site Request Forgery) koruma için kullanılan bir Node.js kütüphanesidir. Cross-Site Request Forgery, kısaca CSRF olarak adlandırılır ve web uygulamalarında yaygın bir güvenlik açığı türüdür. Bu tür saldırılarda, yetkisiz bir kullanıcı tarafından istemci tarayıcısında oturum açmış bir kullanıcının adına istenmeyen istekler gönderilerek, kullanıcının hesabının ele geçirilmesi veya çeşitli işlemlerin gerçekleştirilmesi amaçlanır.

+ csurf, Express.js gibi Node.js tabanlı web uygulama çerçeveleri için tasarlanmış bir ara yazılımdır. Bu kütüphane, oturum açmış kullanıcıların sayfalarına yapılan isteklerin güvenilirliğini sağlamak için özel bir token (CSRF token) kullanır. Bu token, her istek için dinamik olarak oluşturulur ve istemci tarafından sunucuya gönderilir. Sunucu, gelen token ile kullanıcının oturum açmış olduğunu doğrulayarak isteği işler veya reddeder.

+ csurf kütüphanesi kullanılarak, uygulamanın formlarında veya AJAX isteklerinde bu CSRF token'larını kullanmak, saldırganların güvenliği aşmalarını zorlaştırır. Bu sayede, istemci tarafından yetkisiz istekler gönderilmesi engellenir.

+ Özetlemek gerekirse, csurf kütüphanesi web uygulamalarının CSRF saldırılara karşı korunmasına yardımcı olan bir güvenlik önlemidir. Bu tür kütüphaneler kullanmak, uygulamanın güvenliğini artırmaya yönelik önemli adımlardan biridir.
*/
