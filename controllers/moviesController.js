const { Router } = require('express');
const routes = require('./routes');

const movies = Router();

movies.route('/').get(routes.searchByTitle);

movies.route('/:id').get(routes.searchByID);

module.exports = movies;
