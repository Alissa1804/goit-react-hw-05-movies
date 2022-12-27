import { useFetchMovie } from 'hooks/useFetchMovie';
import { Suspense } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import img from '../../images/no_poster.jpg';
import {
  Button,
  Card,
  Info,
  Img,
  Box,
  StyledLink,
  GList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {' '}
      {movie && (
        <>
          <Button
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </Button>
          <Card>
            {(movie.poster_path && (
              <Img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="200"
              />
            )) || <Img src={img} alt={movie.title} width="200" />}
            <Info>
              <h2>{movie.title}</h2>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              {movie.overview && (
                <>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </>
              )}
              {movie.genres && (
                <>
                  <h3>Genres</h3>
                  <GList>
                    {movie.genres.map(({ id, name }) => (
                      <li key={id}>{name}</li>
                    ))}
                  </GList>
                </>
              )}
              <h3>Additional Information</h3>
              <Box>
                <StyledLink
                  to="cast"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Cast
                </StyledLink>
                <StyledLink
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </StyledLink>
              </Box>
            </Info>
          </Card>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
