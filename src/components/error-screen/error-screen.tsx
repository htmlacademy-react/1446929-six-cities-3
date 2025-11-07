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

      <style>{`
        .error-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .error-title {
          font-size: 48px;
          color: #c0392b;
          margin-bottom: 12px;
        }
        .error-message {
          font-size: 18px;
          color: #333;
          margin-bottom: 24px;
        }
      `}
      </style>
    </div>
  );
}

export default ErrorScreen;
