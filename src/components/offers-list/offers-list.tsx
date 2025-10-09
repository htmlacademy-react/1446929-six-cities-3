import PreviewOfferCard from '../preview-offer-card/preview-offer-card';
import { OfferItems } from '../../types/offer';

type OffersListProps = {
  offers: OfferItems;
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PreviewOfferCard
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          title={offer.title}
          isPremium={offer.isPremium}
          isFavorite={offer.isFavorite}
          rating={offer.rating}
          key={offer.id}
        />
      ))}

    </div>
  );
}

export default OffersList;
