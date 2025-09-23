import { CITIES } from '../../const';

function LocationList(): JSX.Element {
  return (

    <section className="locations container">
      <ul className="locations__list tabs__list">

        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}

      </ul>
    </section>

  );
}

export default LocationList;
