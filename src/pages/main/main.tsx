import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { Helmet } from 'react-helmet-async';
import { SortType } from '../../const';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import OffersListEmpty from '../../components/offers-list-empty/offers-list-empty';
import Spinner from '../../components/spinner/spinner';
import ErrorScreen from '../../components/error-screen/error-screen';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offers, isLoading, error } = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.app.activeCity);
  const sortType = useAppSelector((state) => state.app.sortType);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
  const city = filteredOffers[0]?.city ?? offers[0]?.city ?? { name: '', location: { latitude: 0, longitude: 0, zoom: 0 } };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorScreen message='Unable to connect to the server. Please check your internet connection' />;
  }

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch (sortType) {
      case SortType.PriceLowToHigh:
        return a.price - b.price;
      case SortType.PriceHighToLow:
        return b.price - a.price;
      case SortType.TopRatedFirst:
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Home</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${filteredOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList
            activeCity={activeCity}
            onCityChange={(cityItem) => dispatch(changeCity(cityItem))}
          />
        </div>

        {filteredOffers.length > 0 ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${filteredOffers.length} ${filteredOffers.length > 1 ? 'places' : 'place'} to stay in ${activeCity}`}</b>
                <Sort />
                <OffersList
                  offers={sortedOffers}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {filteredOffers.length > 0 && (
                    <Map city={city} offers={filteredOffers} />
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

