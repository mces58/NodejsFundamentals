// bu middleware ile tüm route'larda kullanacağımız değişkenleri oluşturuyoruz
// bu sayede tüm route'larda bu değişkenlere erişebiliriz
// bir önceki projede tüm get isteklerinde bu değişkenleri oluşturuyorduk (isSuccessful: req.session.isSuccess ? true : false)
// bu projede ise bu işlemi bu middleware ile yapıyoruz
module.exports = (req, res, next) => {
  res.locals.isSuccessful = req.session.isSuccess ? true : false;
  res.locals.user = req.session.user ? req.session.user : null;
  next();
};
