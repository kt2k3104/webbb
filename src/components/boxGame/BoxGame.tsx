import { IGame } from "@/types/backend";
import {
  CheckCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import Link from "next/link";

const BoxGame = ({ game, index }: { game: IGame; index: number }) => {
  const keyframes = `
    @keyframes blink_new {
      0% {
        color: rgba(252, 185, 0, 1);
      }
      100% {
        color: rgba(255, 105, 0, 1);
      }
    }
  `;
  return (
    <div className="BoxGame-wrapper">
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          borderRadius: "10px",
          display: "flex",
        }}
        className="BoxGame-content"
      >
        <div style={{ display: "flex" }} className="BoxGame-content-1">
          <div
            style={{
              width: "50%",
              margin: "20px 0",
              borderRight: "1px solid #ced4da",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a href={game.link} target="blank">
              <img
                src={game.imageURL}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </a>
          </div>

          <div
            style={{
              width: "50%",
              margin: "20px 0",
              borderRight: "1px solid #ced4da",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <a
              href={game.link}
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <h3
                style={{
                  color: "rgba(252, 185, 0, 1)",
                  WebkitAnimation: "blink_new 1000ms infinite",
                  textAlign: "center",
                }}
              >
                {game.name}
              </h3>
            </a>
            <p
              style={{
                color: "#ef9c38",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              {game.description}
            </p>
          </div>
        </div>

        <div style={{ display: "flex" }} className="BoxGame-content-2">
          <div className="BoxGame-content-2-1">
            <div style={{ display: "flex", alignItems: "center" }}>
              {game.rating >= 1 && <StarFilled style={{ color: "#ffd32a" }} />}
              {game.rating >= 2 && <StarFilled style={{ color: "#ffd32a" }} />}
              {game.rating >= 3 && <StarFilled style={{ color: "#ffd32a" }} />}
              {game.rating >= 4 && <StarFilled style={{ color: "#ffd32a" }} />}
              {game.rating == 5 && <StarFilled style={{ color: "#ffd32a" }} />}
              <span style={{ marginLeft: "5px", fontWeight: "500" }}>
                {game.rating}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <a
                href=""
                title=""
                style={{
                  background:
                    "linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700",
                }}
              >
                Nhận GiftCode
              </a>
              <img
                src="https://gamedoithuong3.net/wp-content/themes/gb247/assets/img/hot.gif"
                alt=""
                style={{ width: "22px", height: "11px" }}
              />
            </div>
          </div>

          <div className="BoxGame-content-2-2 row">
            <Link
              target="blank"
              href="https://s26betf.cc/"
              style={{
                width: "130px",
                height: "40px",
                borderRadius: "5px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                color: "#fff",
                fontSize: "14px",
                background:
                  "linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 19%, rgb(65, 88, 208) 68%)",
              }}
              className="col col-xxl-12"
            >
              <CheckCircleOutlined style={{ marginRight: "5px" }} />
              Chơi ngay
            </Link>
            <Link
              href={`/review-game/${game.id}`}
              style={{
                width: "130px",
                height: "40px",
                borderRadius: "5px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                fontSize: "14px",
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%)",
              }}
              className="col col-xxl-12"
            >
              <RightCircleOutlined style={{ marginRight: "5px" }} />
              Xem review
            </Link>
          </div>
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "0px",
          left: "50px",
          width: "30px",
          height: "35px",
          background:
            "linear-gradient(135deg, rgb(6, 147, 227) 60%, rgb(155, 81, 224) 100%)",
          border: "none",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        {index + 1}
      </button>
      <style>{keyframes}</style>
    </div>
  );
};

export default BoxGame;
