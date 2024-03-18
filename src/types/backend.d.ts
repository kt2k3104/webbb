export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IGame {
  id: number;
  name: string;
  imageURL: string;
  description: string;
  link: string;
  rating: number;
  game_reviews: IReview[];
  createdAt: string;
  updatedAt: string;
}

export interface IReview {
  id: number;
  title: string;
  contents: string;
  imageURL: string;
  createdAt: string;
  updateAt: string;
  gameid: number;
}
