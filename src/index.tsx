import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Setting, AuthorizationStatus } from './const';
import { MOCK_OFFERS } from './mocks/mock-offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      authorizationStatus={AuthorizationStatus.NoAuth}
      offers={MOCK_OFFERS}
    />
  </React.StrictMode>
);
