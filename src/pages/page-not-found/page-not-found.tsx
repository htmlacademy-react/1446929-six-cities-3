import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>6 cities - Page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default PageNotFound;
