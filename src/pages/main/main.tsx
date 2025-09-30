import { Helmet } from 'react-helmet-async';
import PreviewOfferCard from '../../components/preview-offer-card/preview-offer-card';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';

type MainProps = {
  offersCount: number;
}

function Main({ offersCount }: MainProps): JSX.Element {
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
              <div className="cities__places-list places__list tabs__content">

                <PreviewOfferCard />
                <PreviewOfferCard />
                <PreviewOfferCard />
                <PreviewOfferCard />
                <PreviewOfferCard />

              </div>
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

