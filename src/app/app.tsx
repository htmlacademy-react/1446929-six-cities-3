import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import PageNotFound from '../pages/page-not-found/page-not-found';
import PrivateRoute from '../components/private-route/private-route';
import { useAppSelector } from '../hooks';
import Spinner from '../components/spinner/spinner';


function App(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.app.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={<Main />}
          />

          <Route path={AppRoute.Login}
            element={
              authorizationStatus === AuthorizationStatus.Auth
                ? <Navigate to={AppRoute.Main} />
                : <Login />
            }
          />

          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute mustBeRender={authorizationStatus === AuthorizationStatus.Auth} >
                <Favorites />
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
