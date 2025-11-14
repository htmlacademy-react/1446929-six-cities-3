import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import PreviewOfferCard from '../../components/preview-offer-card/preview-offer-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { useEffect } from 'react';
import Spinner from '../../components/spinner/spinner';
import ErrorScreen from '../../components/error-screen/error-screen';
import Header from '../../components/header/header';


function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const { favoriteOffers, isLoading, error } = useAppSelector((state) => state.favorites);
  const authorizationStatus = useAppSelector((state) => state.app.authorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }

  }, [dispatch, authorizationStatus]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  const favoriteOffersByCity = favoriteOffers.reduce<Record<string, Offer[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Saved Favorites</title>
      </Helmet>

      <Header />

      <main className={`page__main page__main--favorites ${favoriteOffers.length === 0 && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {Object.entries(favoriteOffersByCity).map(([city, offersByCity]) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoute.Main}>
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersByCity.map((offer) => (
                        <PreviewOfferCard
                          offer={offer}
                          view='favorites'
                          key={offer.id}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : <FavoritesEmpty />}

        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
