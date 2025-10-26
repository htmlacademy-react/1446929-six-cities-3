import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import { OfferItems } from '../types/offer';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import PageNotFound from '../pages/page-not-found/page-not-found';
import PrivateRoute from '../components/private-route/private-route';


type AppProps = {
  authorizationStatus: AuthorizationStatus;
  offers: OfferItems;
}

function App({ authorizationStatus, offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={<Main offers={offers} />}
          />

          <Route path={AppRoute.Login}
            element={<Login />}
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute mustBeRender={authorizationStatus === AuthorizationStatus.Auth} >
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer}
            element={<Offer />}
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
