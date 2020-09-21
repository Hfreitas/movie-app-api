const app = require('./app');

const { PORT } = process.env;

const { log } = console;

app.listen(PORT, () => log(`Listening on ${PORT} port!`));
