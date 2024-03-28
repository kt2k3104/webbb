import { IGame } from "@/types/backend";
import { Metadata } from "next";
import Header from "../card-game/components/Header";
import Content from "../card-game/components/Content";
import Sidebar from "../review-game/[slug]/components/Sidebar";

export const metadata: Metadata = {
  title: "GiftCode",
  description: "GiftCode",
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
      <h2>GiftCode</h2>
      <span>GiftCode</span>
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
