import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/action';
import { SortType } from '../../const';


const SORT_OPTIONS = [
  SortType.Popular,
  SortType.PriceLowToHigh,
  SortType.PriceHighToLow,
  SortType.TopRatedFirst,
];


function Sort(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const activeSort = useAppSelector((state) => state.app.sortType);

  const handleSelect = (option: SortType) => {
    dispatch(changeSortType(option));
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''} `}>
        {SORT_OPTIONS.map((option) => (
          <li
            key={option}
            className={`places__option ${option === activeSort ? 'places__option--active' : ''} `}
            tabIndex={0}
            onClick={() => handleSelect(option)}
          >{option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
