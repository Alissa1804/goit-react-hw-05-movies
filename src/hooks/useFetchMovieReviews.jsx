import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesAPI';

export const useFetchMovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');
  const { movie_id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movie_id);
        setReviews(response);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReviews();
  }, [movie_id, error]);

  return reviews;
};
