import PreviewOfferCard from '../preview-offer-card/preview-offer-card';
import { OfferItems } from '../../types/offer';


type OffersListProps = {
  offers: OfferItems;
  onActiveOfferId: (id: string) => void;
}

function OffersList({ offers, onActiveOfferId }: OffersListProps): JSX.Element {


  const handleHoverIn = (id: string) => onActiveOfferId(id);
  const handleHoverOut = () => onActiveOfferId('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.length > 0 &&
        offers.map((offer) => (
          <PreviewOfferCard
            offer={offer}
            key={offer.id}
            onHoverIn={() => handleHoverIn(offer.id)}
            onHoverOut={handleHoverOut}
            viewMode='cities'
            viewWidth={260}
            viewHeight={200}
          />
        ))}

    </div>
  );
}

export default OffersList;
