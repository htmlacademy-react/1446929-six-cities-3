import { CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { OfferItems } from '../../types/offer';
import { useState } from 'react';

type LocationListProps = {
  offers: OfferItems;
}

function LocationList({ offers }: LocationListProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(offers[0]?.city.name || CITIES[0]);

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
                setActiveCity(city);
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
