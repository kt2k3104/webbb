import { IGame, IReview } from "@/types/backend";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import "@/app/styles.scss";

const ReviewGamePage = async (props: any) => {
  const { params } = props;

  let resGame: any = await fetch("http://143.110.146.15/games", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["data"] },
  });
  resGame = await resGame.json();
  const games: IGame[] = resGame.games;
  let game: IGame = games[0];
  let index = 0;
  games.forEach((item, indx) => {
    if (item.id === +params.id) {
      game = item;
      index = indx;
    }
  });

  const resReviews: any = await axios.get(
    `http://143.110.146.15/reviews/${params.id}`,
    {
      // Không sử dụng cache
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  const Reviews: IReview[] = resReviews.data.reviews;

  return (
    <div className="review-game-wrapper">
      <Header game={game} />
      <div style={{ marginTop: "15px" }} className="row">
        <Content game={game} index={index} reviews={Reviews} />
        <Sidebar games={games} />
      </div>
    </div>
  );
};

export default ReviewGamePage;
