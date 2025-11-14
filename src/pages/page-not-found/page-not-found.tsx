import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import './page-not-found.css';

function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--not-found">
      <Helmet>
        <title>6 cities — Page not found</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--not-found">
        <section className="container not-found">
          <h1 className="not-found__title">404 — Page Not Found</h1>
          <p className="not-found__text">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link className="not-found__link button" to={AppRoute.Main}>
            Return to Main Page
          </Link>
        </section>
      </main>
    </div>
  );
}

export default PageNotFound;
