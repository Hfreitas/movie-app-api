const { Router } = require('express');
const routes = require('./routes');
const { validation, schemas } = require('../middlewares');

const media = Router();

media
  .route('/')
  .get(validation(schemas.movieSearchSchema), routes.searchByTitle);

media.route('/:id').get(routes.searchByID);

module.exports = media;
