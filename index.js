const jwt = require('jsonwebtoken');
const JWT_SECRET = 'andri!23'; // Ini sangat rahasia

// Buat basic token type 1 ( Syncronous )
const token = jwt.sign(
  { data: { username: 'pancaPurnama' } }, // Payload token atau pesannya
  JWT_SECRET,
  { expiresIn: '1h' } // Kadaluarsa token: 1h, 1m, 3600, 60
);
console.log("kode token: " + token);

// Buat basic token type 2 ( Asyncronus )
// jwt.sign({ data: { username: 'pancaPurnama' } }, JWT_SECRET, { expiresIn: '1m' }, (err, token) => {
//   console.log("kode token: "+token);
// });

// Kode token yg didapat dicopy ke token1
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoicGFuY2FQdXJuYW1hIn0sImlhdCI6MTU5ODk2NzEzNywiZXhwIjoxNTk4OTcwNzM3fQ.H2kYvprbxcd9d6ym2-49o_FNDiF_DtL8ZbJaCtEO0ig';

// Verifikasi token type 1
// jwt.verify(token1, JWT_SECRET, (err, decode) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(decode);
// });

// Verifikasi token type 2
try {
  const decode = jwt.verify(token1, JWT_SECRET);
  console.log(decode);
} catch (error) {
  console.log(error.message);
}