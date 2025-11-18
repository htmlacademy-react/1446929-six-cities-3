export const RATING_STAR_QTY = 5;

export const TIMEOUT_SHOW_ERROR = 2000;

export const RATING_TITLES: string[] = ['terrible', 'badly', 'not bad', 'good', 'perfect'];

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_CURRENT = './img/pin-active.svg';

export const CARD_SIZE = {
  cities: { width: 260, height: 200 },
  favorites: { width: 150, height: 110 },
};

export const REVIEW_LENGTH = {
  MIN: 50,
  MAX: 300
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));

