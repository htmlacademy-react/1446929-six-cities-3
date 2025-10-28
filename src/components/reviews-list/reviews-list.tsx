import { ReviewItems } from '../../types/review';
import Review from '../../components/review/review';

type ReviewsListProps = {
  reviews: ReviewItems;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            userPhoto={review.user.avatarUrl}
            userName={review.user.name}
            reviewText={review.comment}
            reviewDate={review.date}
          />
        ))}
    </ul>
  );
}

export default ReviewsList;
