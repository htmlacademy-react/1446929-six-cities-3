import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app/app';
import { MOCK_REVIEWS } from './mocks/mock-reviews';
import { checkAuthAction } from './store/api-actions';
import { fetchOffers } from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={MOCK_REVIEWS}
      />
    </Provider>
  </React.StrictMode>
);
