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
  Div,
  Circular,
} from './MovieDetails.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Div>
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
                <Circular>
                  <CircularProgressbar
                    value={Math.round(movie.vote_average * 10)}
                    text={`${Math.round(movie.vote_average * 10)}%`}
                    background
                    backgroundPadding={7}
                    strokeWidth={5}
                    styles={buildStyles({
                      backgroundColor: '#252525',
                      textColor: '#fff',
                      pathColor: '#2af598',
                      trailColor: 'transparent',
                      textSize: '30px',
                    })}
                  />
                </Circular>
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
          </>
        )}
      </Div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
