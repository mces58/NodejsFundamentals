// outlook ve için config ayarları
const config = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "YOUR_EMAIL_ADDRESS",
    pass: "YOUR_PASSWORD",
  },
};

module.exports = config;
