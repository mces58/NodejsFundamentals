// normal bir proje ayarları yapalım
// npm init -y
// npm install webpack webpack-cli --save-dev
// npm install --save lodash
// npm install --save-dev style-loader css-loader
// npm install --save-dev html-webpack-plugin
// npm install --save-dev clean-webpack-plugin
// npm install --save-dev webpack-dev-server
// webpack.config.js dosyası oluşturulur
// webpack.config.js dosyası içerisindeki ayarlar yapılır

// src klasöründe geliştirme aşamasında kullanılır
// dist klasöründe yayın aşamasında kullanılır çıktılar bu klasörde olur

// element oluştur
const element = document.createElement("h1");
element.innerHTML = "Merhaba Dünya";
document.body.appendChild(element);

let name = "Mehmetcan";

const sayHello = () => {
  console.log("Merhaba " + name);
};

sayHello();

import { sum, mult } from "./libs";

console.log(sum(1, 2, 3, 4, 5));

console.log(mult(1, 2, 3, 4, 5));
