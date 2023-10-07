const winston = require("winston");

const logger = winston.createLogger({
  level: "debug", // error, warn, info, verbose, debug, silly

  // format: winston.format.json(), // formatında json kullanıyoruz

  format: winston.format.combine(
    winston.format.timestamp(
      { format: "YYYY-MM-DD HH:mm:ss" } // formatında tarih kullanıyoruz
    ),
    winston.format.prettyPrint()
  ),

  transports: [
    // transports ile hata yakalama işlemlerini yapıyoruz
    // bu hatalara özel dosyalara kaydediyoruz
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logfile.log" }),
  ],

  exitOnError: false, // exitOnError ile hata yakalama işlemlerini yapıyoruz
});

module.exports = logger;
