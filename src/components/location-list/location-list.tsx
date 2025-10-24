import { CITIES } from '../../const';
import { Link } from 'react-router-dom';


type LocationListProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
}

function LocationList({ activeCity, onCityChange }: LocationListProps): JSX.Element {

  return (

    <section className="locations container">
      <ul className="locations__list tabs__list">

        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <Link
              className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
              to="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
              }}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}

      </ul>
    </section >
  );
}

export default LocationList;
