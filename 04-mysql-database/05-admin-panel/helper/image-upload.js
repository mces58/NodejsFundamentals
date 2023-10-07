const multer = require("multer");

// mime type map
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

// resim dosyalarını almak için kullanılır
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype]; // resim dosyası mı değil mi kontrolü
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "public/img");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-"); // resim dosyasının ismini küçük harfe çevirip boşlukları - ile değiştirdik
    const ext = MIME_TYPE_MAP[file.mimetype]; // resim dosyasının uzantısını aldık
    cb(null, name + "-" + Date.now() + "." + ext); // resim dosyasının ismini ve uzantısını birleştirdik
  },
});

// (single: tek resim dosyası almak için)
const upload = multer({ storage: storage });

module.exports = upload; // dışarıya açtık
