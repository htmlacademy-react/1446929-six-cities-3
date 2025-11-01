import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import { OfferItems } from '../types/offer';
import { ReviewItems } from '../types/review';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import PageNotFound from '../pages/page-not-found/page-not-found';
import PrivateRoute from '../components/private-route/private-route';


type AppProps = {
  authorizationStatus: AuthorizationStatus;
  offers: OfferItems;
  offersNearby: OfferItems;
  reviews: ReviewItems;
}

function App(props: AppProps): JSX.Element {
  const { authorizationStatus, offers, offersNearby, reviews } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={<Main />}
          />

          <Route path={AppRoute.Login}
            element={<Login />}
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute mustBeRender={authorizationStatus === AuthorizationStatus.Auth} >
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer}
            element={<Offer reviews={reviews} offersNearby={offersNearby} />}
          />

          <Route path={AppRoute.NotFound}
            element={<PageNotFound />}
          />

        </Routes>
      </BrowserRouter >
    </HelmetProvider >

  );

}

export default App;
