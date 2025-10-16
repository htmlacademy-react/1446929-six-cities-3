import { Offer } from '../../types/offer';

type PreviewOfferCardProps = {
  offer: Offer;
  onHoverIn: () => void;
  onHoverOut: () => void;
}

function PreviewOfferCard(props: PreviewOfferCardProps): JSX.Element {
  const { offer, onHoverIn, onHoverOut } = props;

  const { rating, previewImage, title, isPremium, isFavorite, price, type } = offer;

  const ratingToInteger = Math.round(rating);
  const ratingStarQuantity = 5;

  return (
    <article className="cities__card place-card" onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className={isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingToInteger / ratingStarQuantity * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PreviewOfferCard;
