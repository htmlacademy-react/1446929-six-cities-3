import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import { OfferItems } from '../../types/offer';
import { CITIES } from '../../const';
import { useState } from 'react';

type MainProps = {
  offers: OfferItems;
}

function Main({ offers }: MainProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(offers[0].city.name || CITIES[0]);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Home</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList activeCity={activeCity} onCityChange={setActiveCity} />
        </div>


        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length} ${filteredOffers.length > 1 ? 'places' : 'place'} to stay in ${activeCity}`}</b>
              <Sort />
              <OffersList offers={filteredOffers} />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

