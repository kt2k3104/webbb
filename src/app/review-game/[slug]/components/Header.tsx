import Link from "next/link";

const Header = ({ game }: any) => {
  return (
    <>
      <h1>
        {game.name} – Trải nghiệm game bài trí tuệ – Tải game {game.name} IOS/
        Android/ PC/ APK mới nhất -Update 03/2024
      </h1>
      <span style={{ fontSize: "12px" }}>
        <Link style={{ color: "#333", textDecoration: "none" }} href="/">
          Home{" "}
        </Link>
        -
        <Link
          style={{ color: "#333", textDecoration: "none" }}
          target="blank"
          href="https://s26betf.cc/"
        >
          {" "}
          Game Đánh Bài
        </Link>{" "}
        -{" "}
        <Link
          style={{ color: "#333", textDecoration: "none" }}
          href="https://s26betf.cc/"
        >
          Go88
        </Link>{" "}
        -
        <Link
          style={{ color: "#333", textDecoration: "none" }}
          href="https://s26betf.cc/"
        >
          {" "}
          Trải nghiệm game bài trí tuệ{" "}
        </Link>{" "}
        -
        <Link
          style={{ color: "#333", textDecoration: "none" }}
          href="https://s26betf.cc/"
        >
          {" "}
          Tải game Go88 IOS/ Android/ PC/ APK mới nhất -Update 03/2024
        </Link>
      </span>
    </>
  );
};
export default Header;
