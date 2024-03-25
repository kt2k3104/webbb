"use client";

import { IGame } from "@/types/backend";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogsPage = () => {
  const [games, setGames] = useState<IGame[]>([]);
  useEffect(() => {
    const callApi = async () => {
      const res = await axios.get("http://143.110.146.15/games", {
        // Không sử dụng cache
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      setGames(res.data.games);
    };
    callApi();
  }, []);

  return (
    <div>
      Game Đánh Bài
      {games.map((game) => {
        return <span key={game.id}>{game.name}</span>;
      })}
    </div>
  );
};

export default BlogsPage;
