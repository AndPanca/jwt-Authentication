## JWT : JSON WEB TOKEN (SIMPLE)
JWT atau JSON Web Token adalah sebuah token berbentuk string panjang yang sangat random yang gunanya sendiri untuk melakukan sistem Autentikasi dan Pertukaran Informasi. Umumnya digunakan untuk login pada suatu aplikasi. Jika biasanya aplikasi native menggunakan session untuk login, tetapi pada web API menggunakan token untuk Authentication berupa data informasi yang valid.

**[Buka halaman jwt.io](https://jwt.io/)** : JWT sendiri tersedia untuk berbagai macam bahasa pemprograman, disini saya menggunakan library jwt untuk [Node.js](https://github.com/auth0/node-jsonwebtoken)

**Installasi** 
1. Buat folder, kemudian jalankan "npm init -y" untuk inisialisasi package node.js
2. Jalankan "npm instal jsonwebtoken --save" untuk installasi package JWT
3. Buka file index.js, perhatikan commandnya
4. Jalankan project codenya "node index.js"
