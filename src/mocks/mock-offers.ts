import { OfferItems } from '../types/offer';

const MOCK_OFFERS: OfferItems = [
  {
    id: '293fb774-579f-4c50-a3e2-5b748e0937e4',
    title: 'The house among olive',
    type: 'house',
    price: 306,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: 'f3d74f8e-452e-4491-a211-97227d05b6a7',
    title: 'Wood and stone place',
    type: 'room',
    price: 160,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.2
  },
  {
    id: '733db4d6-1533-4762-a41e-4976d028f198',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 128,
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
    isFavorite: false,
    isPremium: true,
    rating: 2.2
  },
  {
    id: '4640a6ab-62ab-4b2b-a92e-93cb4e7aa302',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 385,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: 'd712b299-1616-4f41-b048-dc9f36f9860a',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 735,
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
    rating: 4
  },
];

export { MOCK_OFFERS };
