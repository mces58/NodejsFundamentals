const winston = require("winston");
require("winston-mongodb");

const logger = winston.createLogger({
  level: "debug", // error, warn, info, verbose, debug, silly

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
    new winston.transports.MongoDB({
      db: "mongodb+srv://can:12345@cluster0.el1u7yk.mongodb.net/shopdb?retryWrites=true&w=majority",
      options: { useUnifiedTopology: true }, // bu şekilde mongodb'ye bağlanıyoruz
      collection: "logs",
      level: "info",
    }),
  ],

  exitOnError: false, // exitOnError ile hata yakalama işlemlerini yapıyoruz
});

module.exports = logger;
