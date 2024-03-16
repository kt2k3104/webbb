import BoxGame from "@/components/boxGame/BoxGame";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default function Home() {
  async function create(formData: FormData) {
    "use server";
    console.log(">>> check formData: ", formData.get("username"));
    // mutate data
    // revalidate cache
  }

  return (
    <>
      <div style={{ padding: "0 100px" }}>
        <form
          action={create}
          style={{
            width: "100%",
            height: "66px",
            display: "flex",
            padding: "15px",
            alignItems: "center",
          }}
        >
          <Input
            height="100%"
            name="username"
            type="text"
            placeholder="tìm kiếm game bài"
          />
          <button style={{ width: "54px", height: "32px" }} type="submit">
            <SearchOutlined />
          </button>
        </form>
        {games.map((game, index) => (
          <BoxGame key={index} game={game} index={index} />
        ))}
      </div>
    </>
  );
}

const games = [
  {
    name: "Go88",
    img: "https://gamedoithuong3.net/wp-content/uploads/2021/06/Logo_Go88_New.png",
    title: "Game Bài Đẳng Cấp",
    star: "5.0",
    review: [],
  },
  {
    name: "Hit Club",
    img: "https://gamedoithuong3.net/wp-content/uploads/2023/02/Hit-club-logo.jpg",
    title: "Game bài viễn tây",
    star: "4.0",
    review: [],
  },
];

const NoiDungBaiViet1 = [
  {
    title: "Gioi thieu ve Go88",
    noidung: {
      text: "Go88 là 1 trong 10 game đánh bài đổi thưởng uy tín bậc nhất tại Việt Nam, được ví như thiên đường cờ bạc online với đa dạng các trò chơi online khác nhau từ đánh bài casino trực tuyến, game mậu binh, phỏm, sâm lốc,…",
      img: "anh?",
    },
    concuano: [],
  },
  {
    title: "Nhung tro choi co tai Go88",
    noidung: {
      text: "tro 1",
      img: "anh1",
    },
    concuano: [],
  },
  {
    title: "Tìm hiểu chi tiết các sảnh tại Go88",
    noidung: {
      text: "",
      img: "",
    },
    concuano: [
      {
        title: "Sảnh game bài hấp dẫn không thể thiếu",
        noidung: {
          text: "hihi",
          img: "anh?",
        },
        concuano: [],
      },
      {
        title: "Siêu phẩm giải trí trong làng nổ hũ ",
        noidung: {
          text: "tro 1",
          img: "anh1",
        },
        concuano: [
          {
            title: "Sảnh game bài hấp dẫn không thể thiếu",
            noidung: {
              text: "hihi",
              img: "anh?",
            },
            concuano: [],
          },
          {
            title: "Siêu phẩm giải trí trong làng nổ hũ ",
            noidung: {
              text: "tro 1",
              img: "anh1",
            },
            concuano: [
              {
                title: "Tây Du Ký",
                noidung: {
                  text: "hihi",
                  img: "anh?",
                },
              },
              {
                title: "Kho Báu Tứ Linh",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "Thần Tài",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "The Witcher",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "Ăn Khế Trả Vàng",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "Sơn Tinh Thủy Tinh",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "Kho Tàng Ngũ Long",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
              {
                title: "Cung Hỷ Phát Tài",
                noidung: {
                  text: "tro 1",
                  img: "anh1",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
