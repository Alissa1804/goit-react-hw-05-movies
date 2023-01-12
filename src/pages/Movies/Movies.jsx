import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/moviesAPI';
import { Loader } from '../../components/Loader/Loader';
import img from '../../images/no_poster.jpg';
import img2 from '../../images/noresults.jpg';
import {
  List,
  ListItem,
  Img,
  StyledLink,
  MTitle,
  Input,
  Button,
  Form,
  Loadmore,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('title');
    if (query === null || query === '') return;
    const fetchMovies = async () => {
      try {
        const data = await fetchMovieBySearch(query, page);
        const movies = data.results;
        setMovies(prevMovies => [...prevMovies, ...movies]);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovies();
  }, [searchParams, page]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ title: form.elements.query.value.trim() });
    form.reset();
    setMovies([]);
    setError('');
  };

  const picturesLoading = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movies" />
        <Button>Search</Button>
      </Form>
      {error && <img src={img2} width="550" alt="No results" />}
      {movies && (
        <>
          <Suspense fallback={<Loader />}>
            <List>
              {movies.map(({ title, id, poster_path }) => (
                <ListItem key={id}>
                  <StyledLink to={id.toString()} state={{ from: location }}>
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
            {movies.length > 0 && movies.length % 20 === 0 && (
              <Loadmore onClick={picturesLoading}>Load more</Loadmore>
            )}
          </Suspense>
        </>
      )}
    </>
  );
};

export default Movies;
