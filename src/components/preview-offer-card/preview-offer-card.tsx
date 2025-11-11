import { Offer } from '../../types/offer';
import { RATING_STAR_QTY, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import { useAppSelector } from '../../hooks';


type PreviewOfferCardProps = {
  offer: Offer;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  view: 'cities' | 'favorites';
  viewWidth: number;
  viewHeight: number;
}

function PreviewOfferCard(props: PreviewOfferCardProps): JSX.Element {

  const { offer, onHoverIn, onHoverOut, view, viewWidth, viewHeight } = props;

  const updatedOffer = useAppSelector((state) =>
    state.offers.offers.find((offerItem) => offerItem.id === offer.id));

  const currentOffer = updatedOffer ?? offer;

  const { rating, previewImage, title, isPremium, isFavorite, price, type } = currentOffer;

  const ratingToInteger = Math.round(rating);

  return (
    <article className={`${view}__card place-card`} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${view}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', offer.id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={viewWidth}
            height={viewHeight}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            view='card'
            isFavorite={isFavorite}
            offerId={offer.id}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingToInteger / RATING_STAR_QTY * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PreviewOfferCard;
