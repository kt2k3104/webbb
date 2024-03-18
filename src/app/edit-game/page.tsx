import axios from "axios";
import Link from "next/link";

const EditGame = async () => {
  const res = await axios.get("http://localhost:8000/games");
  const games = res.data.games;

  return (
    <div>
      <h1>Edit Game</h1>
      <div className="grid text-center">
        {games.map((game: any) => {
          return (
            <Link
              href={`/edit-game/${game.id}`}
              key={game.id}
              className="g-col-6 g-col-md-4"
            >
              <img
                src={game.imageURL}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EditGame;
