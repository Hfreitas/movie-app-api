const axios = require('axios');

const { API_KEY } = process.env;

const movieApi = axios.create({
  baseURL: 'http://www.omdbapi.com/?',
  headers: { Accept: 'application/json' },
});

const searchMovieByTitle = async (title) => {
  try {
    const response = await movieApi.get(`s=${title}&apikey=${API_KEY}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

const searchMovieById = async (id) => {
  try {
    const response = await movieApi.get(`i=${id}&apikey=${API_KEY}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  searchMovieByTitle,
  searchMovieById,
};
