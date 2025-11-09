import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app/app';
import { MOCK_REVIEWS } from './mocks/mock-reviews';
import ErrorScreen from './components/error-screen/error-screen';
import { checkAuthAction } from './store/api-actions';


store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorScreen />
      <App
        reviews={MOCK_REVIEWS}
      />
    </Provider>
  </React.StrictMode>
);
