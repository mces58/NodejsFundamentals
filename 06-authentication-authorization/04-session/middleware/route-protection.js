// bu middleware ile login olmayan kullanıcılar login sayfasına yönlendirilir.
// böylece login olmayan kullanıcılar sadece login sayfasına erişebilir.
// login olan kullanıcılar ise diğer sayfalara erişebilir.
module.exports = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/account/login?redirectTo=" + req.originalUrl); // login olmadan önce örneğin /admin/product/create sayfasına gitmek istiyorduk. login olduktan sonra direkt bu sayfaya yönlendiriyoruz.
  }
  next();
};
