import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import { OfferItems } from '../../types/offer';

type MainProps = {
  offersCount: number;
  offers: OfferItems;
}

function Main({ offersCount, offers }: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Home</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>


        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <Sort />
              <OffersList offers={offers} />

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

