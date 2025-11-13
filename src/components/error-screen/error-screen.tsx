import { useAppSelector } from '../../hooks';
import './error-screen.css';


function ErrorScreen(): JSX.Element | null {
  const error = useAppSelector((state) => state.app.error);

  return (
    <div className="page page--gray page--main">
      <div className="error-screen">
        <h2 className="error-title">Oops!</h2>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
}

export default ErrorScreen;
