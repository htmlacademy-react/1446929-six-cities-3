import { ReviewItem } from '../../types/review';
import { RATING_STAR_QTY, formatDate } from '../../const';


type ReviewProps = {
  review: ReviewItem;
  userName: string;
  reviewText: string;
  reviewDate: string;
  userPhoto: string;
}

function Review(props: ReviewProps): JSX.Element {
  const { review, userPhoto, userName, reviewText, reviewDate } = props;
  const { rating } = review;


  const ratingToInteger = Math.round(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userPhoto} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingToInteger / RATING_STAR_QTY * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime={formatDate(reviewDate)}>{formatDate(reviewDate)}</time>
      </div>
    </li>
  );
}

export default Review;
