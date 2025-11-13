import { useAppSelector } from '../../hooks';
import './error-screen.css';

function ErrorScreen(): JSX.Element {
  const error = useAppSelector((state) => state.app.error);


  const handleRetry = () => {
    window.location.reload();
  };


  return (
    <div className="page page--gray page--main">
      <div className="error-screen" role="alert">
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-message">
          {error ?? 'We couldn’t fetch data from the server. Please try again later.'}
        </p>

        <div className="error-actions">
          <button
            className="error-button retry"
            onClick={handleRetry}
          >
            Retry
          </button>


        </div>
      </div>
    </div>
  );
}

export default ErrorScreen;
