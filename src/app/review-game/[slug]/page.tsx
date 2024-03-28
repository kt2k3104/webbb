import { IGame, IReview } from "@/types/backend";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import "@/app/styles.scss";
import { Metadata } from "next";
import slugify from "slugify";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const temp = (params?.slug?.split(".html")[0].split("-") ?? []) as string[];
  const idGame = temp[temp.length - 1];
  let res: any = await fetch(`http://143.110.146.15/games/${idGame}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  const game: IGame = res.game;
  return {
    title: "Review " + game.name,
    description: game.description,
    openGraph: {
      title: game.name,
      description: game.description,
      type: "website",
      images: [game.imageURL],
    },
  };
}

export const convertSlugUrl = (str: string) => {
  if (!str) return "";
  return slugify(str, { lower: true, locale: "vi" });
};

const ReviewGamePage = async (props: any) => {
  const { params } = props;

  const temp = (params?.slug?.split(".html")[0].split("-") ?? []) as string[];
  const idGame = temp[temp.length - 1];

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
    if (item.id === +idGame) {
      game = item;
      index = indx;
    }
  });

  const resReviews: any = await axios.get(
    `http://143.110.146.15/reviews/${idGame}`,
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
