import { useAppDispatch } from '../../hooks';
import { toggleFavorite } from '../../store/action';

type FavoriteButtonProps = {
  isFavorite: boolean;
  view: 'offer' | 'card';
  offerId: string;
}

function FavoriteButton({ isFavorite, view, offerId }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const baseClass = view === 'offer' ? 'offer__bookmark-button' : 'place-card__bookmark-button';
  const iconClass = view === 'offer' ? 'offer__bookmark-icon' : 'place-card__bookmark-icon';
  const [width, height] = view === 'offer' ? [31, 33] : [18, 19];

  const activeClass = isFavorite ? `${baseClass}--active` : baseClass;

  const handleClick = () => {
    dispatch(toggleFavorite(offerId));
  };

  return (
    <button
      className={`${activeClass} button`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={iconClass}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'Remove from bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default FavoriteButton;
