const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const controllers = require('./controllers');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/media', controllers.media);
app.use('/users', controllers.user);

app.get('/', (_req, res) =>
  res.status(200).json({
    message: 'Greetings! Lovers of Seventh Art!',
  }),
);

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) =>
  err.payload
    ? res.status(err.status).json(err.payload)
    : res.status(500).json({ message: 'Internal error' }),
);

const { PORT = 3001 } = process.env;

const { log } = console;

app.listen(PORT, () => log(`Listening on ${PORT} port!`));
