import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import img from '../../images/nophoto.jpg';
import { List, ListItem, Img, Info, Span } from './Cast.styled';

const Cast = () => {
  const cast = useFetchMovieCast();

  return (
    <>
      {cast && cast.cast.length > 0 ? (
        <List>
          {cast.cast.map(({ id, name, profile_path, character }) => (
            <ListItem key={id}>
              {(profile_path && (
                <Img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="200"
                />
              )) || <Img src={img} alt={name} width="200" />}
              <Info>
                <p>
                  <Span>Name:</Span> {name}
                </p>
                <p>
                  <Span>Character:</Span> {character}
                </p>
              </Info>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>We don't have any Information about cast for this Movie</p>
      )}
    </>
  );
};

export default Cast;
