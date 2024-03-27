import { IGame } from "@/types/backend";
import BoxGame from "./BoxGame";

const Sidebar = ({ games }: any) => {
  return (
    <div className="d-none d-md-block col-md-4">
      <div
        style={{
          fontWeight: "700",
          color: "red",
          borderLeft: "3px solid red",
          textAlign: "start",
          padding: "0 10px",
        }}
      >
        TOP GAME BÀI ĐỔI THƯỞNG
      </div>
      {games.map((game: IGame, index: number) => {
        return <BoxGame key={index} game={game} index={index} />;
      })}
    </div>
  );
};

export default Sidebar;
