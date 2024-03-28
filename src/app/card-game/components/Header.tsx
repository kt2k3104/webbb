import BoxGame from "@/components/boxGame/BoxGame";
import { IGame } from "@/types/backend";

const Header = ({ games, title = "TOP GAME BÀI ĐỔI THƯỞNG" }: any) => {
  return (
    <>
      <div
        style={{
          marginTop: "15px",
          fontWeight: "700",
          color: "red",
          borderLeft: "3px solid red",
          textAlign: "start",
          padding: "0 10px",
        }}
      >
        {title}
      </div>
      {games.map((game: IGame, index: number) => {
        return <BoxGame key={index} game={game} index={index} />;
      })}
    </>
  );
};
export default Header;
