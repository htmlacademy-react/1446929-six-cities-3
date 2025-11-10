import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute, RATING_STAR_QTY } from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchOffersNearby, fetchReviews, fetchOfferById } from '../../store/api-actions';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';


function Offer(): JSX.Element | null {

  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const offersNearby = useAppSelector((state) => state.offers.offersNearby);
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const { isLoading, currentOffer } = useAppSelector((state) => state.offers);
  const ratingToInteger = currentOffer?.rating ? Math.round(currentOffer.rating) : 0;

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      try {
        await dispatch(fetchOfferById(id)).unwrap();

        dispatch(fetchReviews(id));
        dispatch(fetchOffersNearby(id));
      } catch {
        navigate(AppRoute.NotFound);
      }
    };

    fetchData();
  }, [id, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return null;
  }

  const mapOffers = [currentOffer, ...offersNearby.slice(0, 3)].filter((offer) => offer !== undefined);

  const city = mapOffers[0]?.city;

  const limitedReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>

      <Header />


      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images?.slice(0, 6).map((img) => (
                <div key={img} className="offer__image-wrapper">
                  <img className="offer__image" src={img} alt="Offer view" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                {currentOffer && (
                  <h1 className="offer__name">
                    {currentOffer.title}
                  </h1>
                )}

                <FavoriteButton
                  view='offer'
                  isFavorite={currentOffer.isFavorite}
                  offerId={currentOffer.id}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingToInteger / RATING_STAR_QTY * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                {currentOffer && (
                  <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
                )}

              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type.charAt(0).toUpperCase() + currentOffer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${currentOffer.bedrooms} ${currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${currentOffer.maxAdults} ${currentOffer.maxAdults > 1 ? 'adults' : 'adult'}`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods?.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              {currentOffer.host && (
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div
                      className={`offer__avatar-wrapper user__avatar-wrapper ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''}`}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt={currentOffer.host.name}
                      />
                    </div>
                    <span className="offer__user-name">{currentOffer.host.name}</span>
                    {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{currentOffer.description}</p>
                  </div>
                </div>
              )}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span></h2>

                {reviews && reviews.length > 0 && (
                  <ReviewsList
                    reviews={limitedReviews}
                  />
                )}

                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            {mapOffers.length > 0 && (
              <Map city={city} offers={mapOffers} activeOfferId={currentOffer.id} />
            )}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby && offersNearby.length > 0 && (
                <OffersList offers={offersNearby.slice(0, 3)} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default Offer;
