import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavoriteStatus } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';


type FavoriteButtonProps = {
  isFavorite: boolean;
  view: 'offer' | 'card';
  offerId: string;
}

function FavoriteButton({ isFavorite, view, offerId }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.app.authorizationStatus);
  const navigate = useNavigate();

  const handleClick = () => {

    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(toggleFavoriteStatus({ offerId, status: !isFavorite }));
  };

  const classPrefix = view === 'offer' ? 'offer' : 'place-card';
  const activeClass = isFavorite ? `${classPrefix}__bookmark-button--active` : '';

  return (
    <button
      className={`${classPrefix}__bookmark-button button ${activeClass}`}
      type="button"
      onClick={handleClick}
    >
      <svg className={`${classPrefix}__bookmark-icon`} width={view === 'offer' ? 31 : 18} height={view === 'offer' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
