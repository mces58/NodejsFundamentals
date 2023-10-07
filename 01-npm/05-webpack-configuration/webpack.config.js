const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"], // giriş dosyası (başlangıç dosyası)
  output: {
    filename: "js/bundle.js", // çıktı dosyası
    path: path.resolve(__dirname, "dist"), // çıktı dosyasının yolu
  },
  devServer: {
    // yapılan değişiklikleri algılar ve projeyi yeniden çalıştırır
    static: "./dist", // çıktı dosyasının yolu yazılır
  },
  plugins: [
    new htmlWebpackPlugin({
      // html dosyası oluşturur
      template: "./src/index.html", // template olarak kullanılan html dosyasının yolu yazılır
      filename: "index.html", // yeni oluşturulacak html dosyasının adı yazılır
      inject: true, // index.html sayfasını ekleyecek yer belirtilir
      minify: {
        // html dosyasını sıkıştırır
        removeComments: true, // yorum satırlarını siler
        collapseWhitespace: true, // boşlukları siler
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

// webpack.config.js dosyası içerisindeki ayarlar yapılır

// webpack.config.js dosyası nedir?
// webpack.config.js dosyası, webpack tarafından kullanılan yapılandırma dosyasıdır.
// webpack.config.js dosyası, webpack tarafından varsayılan olarak aranır.

// webpack.config.js dosyası nerede olmalıdır?
// webpack.config.js dosyası, proje ana dizininde olmalıdır.

// webpack.config.js dosyası nasıl oluşturulur?
// webpack.config.js dosyası, elle oluşturulabilir.
// webpack.config.js dosyası, webpack-cli tarafından otomatik olarak oluşturulabilir.
// webpack.config.js dosyası, webpack-cli tarafından otomatik olarak oluşturulması için,
// npx webpack-cli init komutu kullanılabilir.

// webpack.config.js dosyası içerisindeki ayarlar nelerdir?
// webpack.config.js dosyası içerisindeki ayarlar, webpack tarafından kullanılan ayarlardır.

// webpack.config.js dosyası içerisindeki ayarlar nasıl yapılır?
// webpack.config.js dosyası içerisindeki ayarlar, module.exports nesnesi içerisinde yapılır.
// webpack.config.js dosyası içerisindeki ayarlar, module.exports nesnesi içerisindeki entry ve output nesneleri ile yapılır.

// webpack.config.js dosyası içerisindeki ayarlar nelerdir?
// webpack.config.js dosyası içerisindeki ayarlar, entry ve output nesneleri ile yapılır.
// webpack.config.js dosyası içerisindeki ayarlar, entry nesnesi ile başlangıç dosyası belirlenir.
// webpack.config.js dosyası içerisindeki ayarlar, output nesnesi ile çıktı dosyası belirlenir.
