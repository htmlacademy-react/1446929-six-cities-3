type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: CityLocation;
}

type OfferItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
}


export type Offer = OfferItem;
export type OfferItems = OfferItem[];
