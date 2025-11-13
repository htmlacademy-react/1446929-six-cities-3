import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <div className="loading-screen">
        <div className="spinner"></div>
        <p className="loading-text">Loading offers...</p>
      </div>
    </div>
  );
}

export default Spinner;
