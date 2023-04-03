const express = require('express');
const app = express();
const port = 3010;
const fs = require('fs');

app.get('/', (req, res) => {
  let file = fs.readFileSync('./messages.txt');
  res.send(file);
  res.end();
});

app.post('/', (req, res) => {
  let file = fs.readFileSync('./messages.txt');
  file = file + 'j̶̤͝' + req.body;
  res.send('Success');
  res.end();
});

app.listen(port);
