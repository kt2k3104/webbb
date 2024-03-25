import axios from "axios";
import Link from "next/link";

const EditGame = async () => {
  const res = await axios.get("http://143.110.146.15/games");
  const games = res.data.games;

  return (
    <div className="edit-review-wrapper">
      <h1>Edit Review</h1>
      <div className="row text-center" style={{ gap: "10px" }}>
        {games.map((game: any) => {
          return (
            <Link
              href={`/edit-review/${game.id}`}
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
