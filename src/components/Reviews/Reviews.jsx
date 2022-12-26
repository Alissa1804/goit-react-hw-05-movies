import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { List, ListItem, A } from './Reviews.styled';

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
        <p>We don't have any reviews for this Movie</p>
      )}
    </>
  );
};

export default Reviews;
