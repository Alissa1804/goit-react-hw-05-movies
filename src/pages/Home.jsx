import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import img from '../images/no_poster.jpg';
import { Title, List, ListItem, Img, StyledLink, MTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesHome = async () => {
      setLoading(true);
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesHome();
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {!loading && movies && (
        <>
          <Title>Trending Movies Today</Title>
          <List>
            {movies.map(({ title, id, poster_path }) => (
              <ListItem key={id}>
                <StyledLink to={`/movies/${id.toString()}`}>
                  {(poster_path && (
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                      width="200"
                    />
                  )) || <Img src={img} alt={title} width="200" />}
                  <MTitle>{title}</MTitle>
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default Home;
