const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome To Home Page'); 
});

app.get('/about', (req, res) => {
  res.send('Welcome To About Page'); 
});

app.get('/contact', (req, res) => {
  res.send('Welcome To Contact Page'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});