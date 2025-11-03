import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app/app';
import { AuthorizationStatus } from './const';
import { MOCK_REVIEWS } from './mocks/mock-reviews';
import { MOCK_OFFERS_NEARBY } from './mocks/mock-offers-nearby';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authorizationStatus={AuthorizationStatus.Auth}
        offersNearby={MOCK_OFFERS_NEARBY}
        reviews={MOCK_REVIEWS}
      />
    </Provider>
  </React.StrictMode>
);
