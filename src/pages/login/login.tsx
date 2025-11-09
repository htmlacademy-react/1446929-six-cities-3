import { useRef, FormEvent, useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';


function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isPasswordValid = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]+$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const password = evt.target.value;
    if (!isPasswordValid(password)) {
      setPasswordError('Password must contain at least one letter, one number, and no spaces.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    (async () => {
      if (loginRef.current && passwordRef.current) {
        const email = loginRef.current.value;
        const password = passwordRef.current.value;

        if (!isPasswordValid(password)) {
          setPasswordError('Password must contain at least one letter, one number, and no spaces.');
          return;
        }

        setPasswordError('');

        try {
          await dispatch(loginAction({ login: email, password })).unwrap();
          navigate(AppRoute.Main);
        } catch (err) {
          setPasswordError('Invalid credentials. Please check your email and password.');
        }
      }
    })();


  };


  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - Log in</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p style={{ color: 'red', marginTop: '4px', fontSize: '12px' }}>
                    {passwordError}
                  </p>
                )}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
