import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { List, ListItem, A, P } from './Reviews.styled';

const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <>
      {reviews && reviews.results.length > 0 ? (
        <List>
          {reviews.results.map(({ id, author, content }) => (
            <ListItem key={id}>
              <A>{author}</A>
              <p>{content}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <P>We don't have any reviews for this Movie</P>
      )}
    </>
  );
};

export default Reviews;
