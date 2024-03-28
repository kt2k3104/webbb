import { IGame } from "@/types/backend";
import { Metadata } from "next";
import Header from "../card-game/components/Header";
import Content from "../card-game/components/Content";
import Sidebar from "../review-game/[slug]/components/Sidebar";
import { daoLonViTriCacPhanTuTrongMang } from "../shoot-fish-and-get-prizes/page";

export const metadata: Metadata = {
  title: "Quay hũ đổi thưởng",
  description: "Quay hũ đổi thưởng",
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
      <h2>Quay hũ đổi thưởng</h2>
      <span>Home - Quay hũ đổi thưởng</span>
      <div className="card-game-content row">
        <button className="card-game-content-left-btn">
          Quay hũ đổi thưởng
        </button>
        <div className="card-game-content-left col-sm-12 col-md-8">
          <Header
            games={daoLonViTriCacPhanTuTrongMang(games)}
            title={"QUAY HŨ ĐỔI THƯỞNG"}
          />
          <Content />
        </div>
        <Sidebar games={games} />
      </div>
    </div>
  );
};

export default UsersPage;
