import { OfferItems } from '../types/offer';

const MOCK_OFFERS: OfferItems = [
  {
    id: '1b200217-5945-4428-8d00-05ffc730521b',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 351,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: 'f3d74f8e-452e-4491-a211-97227d05b6a7',
    title: 'Wood and stone place',
    type: 'room',
    price: 160,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: '19d949db-d26e-4589-b4d7-13f8d1008243',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 180,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8
  },
  {
    id: 'd456496a-d750-411b-aead-69835f58f934',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 377,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.2
  }
];

export { MOCK_OFFERS };
