export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewData = {
  offerId: string;
  comment: string;
  rating: number;
}

type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export type ReviewItem = Review;
export type ReviewItems = Review[];
