const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
// import in models
const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));

// routes
server.get('/food', (req, res) => {
  res.json({ text: 'Hello World!' });
});

server.get('/monsters', (req, res) => {
  res.json(['Mike Wazowski', 'Sully', 'Some Guy']);
});

module.exports = {
  server
};