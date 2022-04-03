import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from './Review';

const AllReview = () => {
  const { reviews } = useReviews();

  return (
    <div>
      {reviews.map((review) => (
        <Review
          key={review.id}
          name={review.name}
          img={review.img}
          rating={review.rating}
          body={review.body}
        />
      ))}
    </div>
  );
};

export default AllReview;
