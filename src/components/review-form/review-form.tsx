import { useState, Fragment, FormEvent } from 'react';
import { RATING_STAR_QTY } from '../../const';
import { RATING_TITLES } from '../../const';

const REVIEW_MAX_LENGTH = 300;
const REVIEW_MIN_LENGTH = 50;

function ReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({ review: '', rating: 0 });
  const [error, setError] = useState('');

  const isSubmitDisabled = formData.rating === 0 || formData.review.length < REVIEW_MIN_LENGTH;

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.review.length > REVIEW_MAX_LENGTH) {
      setError('Review length should be maximum 300 characters.');
      return;
    }

    setFormData({ review: '', rating: 0 });

  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review </label>
      <div className="reviews__rating-form form__rating">

        {Array.from({ length: RATING_STAR_QTY }, (_, i) => {
          const value = RATING_STAR_QTY - i;
          const title = RATING_TITLES[value - 1];

          return (
            <Fragment key={value} >
              <input
                onChange={() => setFormData({ ...formData, rating: value })}
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                checked={formData.rating === value}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}

              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formData.review}
        onChange={(event) => {
          setFormData({ ...formData, review: event.target.value });

          if (formData.review.length < REVIEW_MAX_LENGTH) {
            setError('');
          }
        }}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />


      {error && <span style={{ color: 'red' }}>{error}</span>}

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form >
  );
}

export default ReviewForm;
