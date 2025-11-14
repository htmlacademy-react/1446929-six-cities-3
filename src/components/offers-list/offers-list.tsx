import PreviewOfferCard from '../preview-offer-card/preview-offer-card';
import { OfferItems } from '../../types/offer';


type OffersListProps = {
  offers: OfferItems;
  onOfferHover?: (offerId: string | null) => void;
}

function OffersList({ offers, onOfferHover }: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.length > 0 &&
        offers.map((offer) => (
          <PreviewOfferCard
            offer={offer}
            key={offer.id}
            onHoverIn={() => onOfferHover?.(offer.id)}
            onHoverOut={() => onOfferHover?.(null)}
            view='cities'
          />
        ))}

    </div>
  );
}

export default OffersList;
