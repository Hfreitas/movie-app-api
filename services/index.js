const { searchMovieById, searchMovieByTitle } = require('./APIServices');
const { create } = require('./userServices');

module.exports = {
  mediaById: searchMovieById,
  mediaByTitle: searchMovieByTitle,
  addUser: create,
};
