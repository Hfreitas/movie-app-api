const OMDBroutes = require('./OMDBroutes');

module.exports = {
  searchByTitle: OMDBroutes.getMoviesByTitle,
  searchByID: OMDBroutes.getMovieByID,
};
