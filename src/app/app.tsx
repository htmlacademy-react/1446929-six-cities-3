import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorite from '../pages/favorite/favorite';
import Offer from '../pages/offer/offer';
import PageNotFound from '../pages/page-not-found/page-not-found';
import PrivateRoute from '../components/private-route/private-route';

type AppProps = {
  offersCount: number;

}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<Main offersCount={offersCount} />}
        />

        <Route path={AppRoute.Login}
          element={<Login />}
        />

        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorite />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer}
          element={<Offer />}
        />

        <Route path='*'
          element={<PageNotFound />}
        />

      </Routes>
    </BrowserRouter >
  );

}

export default App;
