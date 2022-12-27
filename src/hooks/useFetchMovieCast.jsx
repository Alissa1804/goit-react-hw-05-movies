import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/moviesAPI';

export const useFetchMovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCast(movie_id);
        setCast(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [movie_id]);

  return cast;
};
