const axios = require('axios');

const { API_KEY } = process.env;

const movieApi = axios.create({
  baseURL: 'http://www.omdbapi.com/?',
  headers: { Accept: 'application/json' },
});

const searchMovieByTitle = async (title, type = '', page = 1) => {
  try {
    const response = type
      ? await movieApi.get(
          `s=${title}&type=${type}&r=json&page=${page}&apikey=${API_KEY}`,
        )
      : await movieApi.get(`s=${title}&r=json&apikey=${API_KEY}`);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
};

const searchMovieById = async (id) => {
  try {
    const response = await movieApi.get(`i=${id}&r=json&apikey=${API_KEY}`);
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
