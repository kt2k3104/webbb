import axios from "axios";
import Link from "next/link";

const AddReview = async () => {
  const res = await axios.get("http://localhost:8000/games");
  const games = res.data.games;
  return (
    <>
      <h1>Add Review</h1>
      <div className="grid text-center">
        {games.map((game: any) => {
          return (
            <Link
              href={`/add-review/${game.id}`}
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
    </>
  );
};

export default AddReview;
