import { OfferItems } from '../types/offer';

const MOCK_OFFERS_NEARBY: OfferItems = [
  {
    id: '68b18632-9f2e-4dac-bccb-d1ad530cdbcb',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 985,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2
  },
  {
    id: 'cf342afe-7bb2-4074-ad33-1de88c334478',
    title: 'The Joshua Tree House',
    type: 'apartment',
    price: 380,
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
      latitude: 52.370540000000005,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '781a6575-6e26-4035-b2a2-71759c02ee1e',
    title: 'House in countryside',
    type: 'house',
    price: 607,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36354,
      longitude: 4.889976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: '11b1a480-e5a4-4ac2-ad86-a58ce871b9f0',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 113,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.388540000000006,
      longitude: 4.899976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4
  },
];

export { MOCK_OFFERS_NEARBY };
