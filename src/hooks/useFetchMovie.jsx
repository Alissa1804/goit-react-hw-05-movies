import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/moviesAPI';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        const response = await fetchMovieById(movie_id);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieId();
  }, [movie_id]);

  return movie;
};
