const { searchMovieById, searchMovieByTitle } = require('./externalAPI');

module.exports = {
  APIById: searchMovieById,
  APIByTitle: searchMovieByTitle,
};
