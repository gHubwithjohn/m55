const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the M55 Online Shopping App!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
