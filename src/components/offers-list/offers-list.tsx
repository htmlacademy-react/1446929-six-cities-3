import PreviewOfferCard from '../preview-offer-card/preview-offer-card';
import { OfferItems } from '../../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferItems;
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState('');
  console.log(activeOfferId);

  const handleHoverIn = (id: string) => setActiveOfferId(id);
  const handleHoverOut = () => setActiveOfferId('');

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
