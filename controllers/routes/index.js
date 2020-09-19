const OMDBroutes = require('./OMDBroutes');
const userRoutes = require('./userRoutes');

module.exports = {
  searchByTitle: OMDBroutes.getMoviesByTitle,
  searchByID: OMDBroutes.getMovieByID,
  registryUser: userRoutes.registryUser,
};
