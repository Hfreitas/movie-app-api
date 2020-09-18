const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
const { PORT = 3000 } = process.env;

app.get('/', (_req, res) =>
  res.send(
    `<h1 style="color:blue;text-align:center;">Greetings! Lovers of Seventh Art!</h1>`,
  ),
);

const { log } = console;

app.listen(PORT, () => log(`Listening on ${PORT} port!`));
