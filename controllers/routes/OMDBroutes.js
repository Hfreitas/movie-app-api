const { APIById, APIByTitle } = require('../../services');

const getMoviesByTitle = async (req, res, next) => {
  try {
    const { title, type, page } = req.body;

    const mediaData = await APIByTitle(title, type, page);
    return res.status(200).json({ [type]: mediaData || 'Media not found' });
  } catch (error) {
    return next(error);
  }
};

const getMovieByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieDetails = await APIById(id);
    return res.status(200).json({ movie: movieDetails });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getMoviesByTitle,
  getMovieByID,
};
