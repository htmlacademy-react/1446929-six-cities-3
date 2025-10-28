import { ReviewItems } from '../types/review';

const MOCK_REVIEWS: ReviewItems = [
  {
    id: '5f53134b-276b-49bd-9c7b-e9f47db423c5',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2025-10-05T21:00:01.679Z',
    rating: 1,
    user: {
      name: 'Corey',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: true
    }
  },
  {
    id: '8d7ef9af-4a4c-428c-86f8-8fcaa979491c',
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desperately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2025-10-04T21:00:01.679Z',
    rating: 4,
    user: {
      name: 'Kendall',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: false
    }
  },
  {
    id: '897bebf1-724e-496b-bf26-4208c270e1f2',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2025-10-03T21:00:01.679Z',
    rating: 2,
    user: {
      name: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: true
    }
  }
];

export { MOCK_REVIEWS };
