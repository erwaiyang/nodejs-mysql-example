const bodyParser = require('body-parser');
const express = require('express');

const app = express();

/* static public files */
app.use(express.static('public'));

/* body parser */
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  // log each request to the console
  console.warn(req.ip, req.method, req.url);
  // continue doing what we were doing and go to the route
  next();
});

/* routes */
const routes = require('./routes');

const home = routes.home;
app.use('/', home);

/* 404 Not Found */
app.use((req, res) => {
  res.sendStatus(404);
});

const SERVER_PORT = process.env.NODEJS_PORT || 4000;
const SERVER_IP_ADDRESS = process.env.NODEJS_IP || '127.0.0.1';

app.listen(SERVER_PORT, SERVER_IP_ADDRESS, () => {
  console.log(`Listening on ${SERVER_IP_ADDRESS}, server_port ${SERVER_PORT}`);
});

module.exports = app;
