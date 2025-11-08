import './error-screen.css';

type ErrorScreenProps = {
  message?: string;
};

function ErrorScreen({ message = 'Something went wrong.' }: ErrorScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <div className="error-screen">
        <h2 className="error-title">Oops!</h2>
        <p className="error-message">{message}</p>
      </div>
    </div>
  );
}

export default ErrorScreen;
