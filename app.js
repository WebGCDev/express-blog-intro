const express = require('express');
const app = express();
const port = 9015;

app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!</h1>');
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
