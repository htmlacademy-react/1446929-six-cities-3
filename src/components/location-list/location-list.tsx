import { CITIES } from '../../const';
import { Link } from 'react-router-dom';

function LocationList(): JSX.Element {
  return (

    <section className="locations container">
      <ul className="locations__list tabs__list">

        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            {city === 'Paris' ? (<Link className="locations__item-link tabs__item tabs__item--active" to="#"><span>{city}</span></Link>) : (<Link className="locations__item-link tabs__item" to="#"><span>{city}</span></Link>)}
          </li>
        ))}

      </ul>
    </section>

  );
}

export default LocationList;
