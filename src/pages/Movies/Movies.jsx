import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/moviesAPI';
import { Loader } from '../../components/Loader/Loader';
import img from '../../images/no_poster.jpg';
import {
  List,
  ListItem,
  Img,
  StyledLink,
  MTitle,
  Input,
  Button,
  Form,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('title');
    if (query === null || query === '') return;
    const fetchMovies = async () => {
      try {
        const data = await fetchMovieBySearch(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ title: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movies" />
        <Button>Search</Button>
      </Form>
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
          </Suspense>
        </>
      )}
    </>
  );
};

export default Movies;
