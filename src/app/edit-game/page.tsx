import Link from "next/link";
import "@/app/styles.scss";
import { IGame } from "@/types/backend";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Game",
  description: "Edit Game",
};

const EditGame = async () => {
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
    <div className="edit-game-wrapper">
      <h1>Edit Game</h1>
      <div className="row text-center" style={{ gap: "10px" }}>
        {games.map((game: any) => {
          return (
            <Link
              href={`/edit-game/${game.id}`}
              key={game.id}
              className="g-col-6 g-col-md-4"
              style={{ display: "block", width: "100px" }}
            >
              <img
                src={game.imageURL}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
              <p>{game.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EditGame;
