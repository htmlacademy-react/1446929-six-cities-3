type FavoriteButtonProps = {
  isFavorite: boolean;
  view: 'offer' | 'card';
  onClick: () => void;
}

function FavoriteButton({ isFavorite, view, onClick }: FavoriteButtonProps): JSX.Element {
  const baseClass = view === 'offer' ? 'offer__bookmark-button' : 'place-card__bookmark-button';
  const iconClass = view === 'offer' ? 'offer__bookmark-icon' : 'place-card__bookmark-icon';
  const [width, height] = view === 'offer' ? [31, 33] : [18, 19];

  const activeClass = isFavorite ? `${baseClass}--active` : baseClass;

  return (
    <button
      className={`${activeClass} button`}
      type="button"
      onClick={onClick}
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
