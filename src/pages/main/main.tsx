import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferItems } from '../../types/offer';
import { CITIES } from '../../const';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import OffersListEmpty from '../../components/offers-list-empty/offers-list-empty';

const defaultCity = CITIES[0];

type MainProps = {
  offers: OfferItems;
}

function Main({ offers }: MainProps): JSX.Element {

  const [activeCity, setActiveCity] = useState(defaultCity);
  const [activeOfferId, setActiveOfferId] = useState('');
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
  const city = filteredOffers[0]?.city || offers[0].city;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Home</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${filteredOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList activeCity={activeCity} onCityChange={setActiveCity} />
        </div>

        {filteredOffers && filteredOffers.length > 0 ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${filteredOffers.length} ${filteredOffers.length > 1 ? 'places' : 'place'} to stay in ${activeCity}`}</b>
                <Sort />
                <OffersList offers={filteredOffers} onActiveOfferId={setActiveOfferId} />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {filteredOffers.length > 0 && (
                    <Map city={city} offers={filteredOffers} activeOfferId={activeOfferId} />
                  )}
                </section>
              </div>
            </div>
          </div>) :
          <OffersListEmpty activeCity={activeCity} />}

      </main>
    </div >
  );
}

export default Main;

