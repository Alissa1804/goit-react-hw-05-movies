import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/moviesAPI';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const { movie_id } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        const response = await fetchMovieById(movie_id);
        setMovie(response);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovieId();
  }, [movie_id, error]);

  return movie;
};
