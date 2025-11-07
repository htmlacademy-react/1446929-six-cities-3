import PreviewOfferCard from '../preview-offer-card/preview-offer-card';
import { OfferItems } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { setActiveOfferId } from '../../store/action';


type OffersListProps = {
  offers: OfferItems;
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.length > 0 &&
        offers.map((offer) => (
          <PreviewOfferCard
            offer={offer}
            key={offer.id}
            onHoverIn={() => dispatch(setActiveOfferId(offer.id))}
            onHoverOut={() => dispatch(setActiveOfferId(''))}
            view='cities'
            viewWidth={260}
            viewHeight={200}
          />
        ))}

    </div>
  );
}

export default OffersList;
