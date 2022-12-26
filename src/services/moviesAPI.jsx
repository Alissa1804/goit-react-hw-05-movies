import axios from 'axios';
const KEY = '894a5fcb5eb3af426933275e70f0cd83';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMovieById(movie_id) {
  const response = await axios(`movie/${movie_id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMovieBySearch(query) {
  const response = await axios(`search/movie`, {
    params: {
      api_key: KEY,
      query,
    },
  });
  return response.data;
}

export async function fetchMovieCast(movie_id) {
  const response = await axios(`movie/${movie_id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(movie_id) {
  const response = await axios(`movie/${movie_id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}
