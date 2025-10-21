import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  mustBeRender: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { mustBeRender, children } = props;

  return (
    mustBeRender
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
