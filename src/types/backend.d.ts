export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IGame {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  rating: number;
  reviews: IReview[];
}

export interface IReview {
  id: number;
  title: string;
  contents: string[];
  image: string;
}
