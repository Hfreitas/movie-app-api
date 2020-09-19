const { searchMovieById, searchMovieByTitle } = require('./externalAPI');

module.exports = {
  mediaById: searchMovieById,
  mediaByTitle: searchMovieByTitle,
};
