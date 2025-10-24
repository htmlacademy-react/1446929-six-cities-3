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
}


export type Offer = OfferItem;
export type OfferItems = OfferItem[];
