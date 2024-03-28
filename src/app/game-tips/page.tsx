import { Metadata } from "next";
import Header from "../card-game/components/Header";
import Content from "../card-game/components/Content";
import Sidebar from "../review-game/[slug]/components/Sidebar";
import { IGame } from "@/types/backend";

export const metadata: Metadata = {
  title: "Thủ thuật game",
  description: "Thủ thuật game",
};

const UsersPage = async (props: any) => {
  let resGame: any = await fetch("http://143.110.146.15/games", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["data"] },
  });
  resGame = await resGame.json();
  const games: IGame[] = resGame.games;
  return (
    <div className="card-game-wrapper">
      <h2>Thủ thuật game</h2>
      <span>Home - Thủ thuật game</span>
      <div className="card-game-content row">
        <button className="card-game-content-left-btn">Game Đánh Bài</button>
        <div className="card-game-content-left col-sm-12 col-md-8">
          <Header games={games} />
          <Content />
        </div>
        <Sidebar games={games} />
      </div>
    </div>
  );
};

export default UsersPage;
