import {
  CheckCircleOutlined,
  RightCircleOutlined,
  StarFilled,
} from "@ant-design/icons";

const BoxGame = ({ game, index }: any) => {
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
    <div
      style={{
        width: "100%",
        height: "140px",
        padding: "15px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "25%",
            margin: "20px 0",
            borderRight: "1px solid #ced4da",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={game.img}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div
          style={{
            width: "25%",
            margin: "20px 0",
            borderRight: "1px solid #ced4da",
          }}
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
          <p
            style={{
              color: "#ef9c38",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            {game.title}
          </p>
        </div>

        <div
          style={{
            width: "25%",
            margin: "20px 0",
            borderRight: "1px solid #ced4da",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {game.star >= 1 && <StarFilled style={{ color: "#ffd32a" }} />}
            {game.star >= 2 && <StarFilled style={{ color: "#ffd32a" }} />}
            {game.star >= 3 && <StarFilled style={{ color: "#ffd32a" }} />}
            {game.star >= 4 && <StarFilled style={{ color: "#ffd32a" }} />}
            {game.star == 5 && <StarFilled style={{ color: "#ffd32a" }} />}
            <span style={{ marginLeft: "5px", fontWeight: "500" }}>
              {game.star}
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

        <div
          style={{
            width: "25%",
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <a
            href=""
            style={{
              width: "130px",
              height: "40px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              lineHeight: "40px",
              color: "#fff",
              background:
                "linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 19%, rgb(65, 88, 208) 68%)",
            }}
          >
            <CheckCircleOutlined style={{ marginRight: "5px" }} />
            Chơi ngay
          </a>
          <a
            href=""
            style={{
              width: "130px",
              height: "40px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              lineHeight: "40px",
              color: "#fff",
              background:
                "linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%)",
            }}
          >
            <RightCircleOutlined style={{ marginRight: "5px" }} />
            Xem review
          </a>
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
