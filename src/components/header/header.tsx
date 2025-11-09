import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';


function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.app.authorizationStatus);
  const user = useAppSelector((state) => state.user.user);
  const { favoriteOffers } = useAppSelector((state) => state.favorites);

  const handleSignOut = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <React.Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user?.email ?? 'User'}</span>
                      <span className="header__favorite-count">{favoriteOffers?.length ?? 0}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Main}
                      onClick={handleSignOut}
                    >
                      <span className="header__signout">
                        Sign out
                      </span>
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signin">Sign in</span>
                  </Link>
                </li>
              )}

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
