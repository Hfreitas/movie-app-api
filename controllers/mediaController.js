const { Router } = require('express');
const routes = require('./routes');
const { validation } = require('../middlewares');

const movies = Router();

movies.route('/').get(validation.mediaSearch, routes.searchByTitle);

movies.route('/:id').get(routes.searchByID);

module.exports = movies;
