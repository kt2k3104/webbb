import BoxGame from "@/components/boxGame/BoxGame";
import { Image } from "antd";
import BoxContent from "./BoxContent";

const Content = async ({ game, index, reviews }: any) => {
  return (
    <div
      style={{ paddingTop: "15px", position: "relative" }}
      className="col-sm-12 col-md-8"
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <div style={{}}>
          {game.rating} sao, (
          {game.rating * 10 + Math.floor(Math.random() * 10)} bình chọn)
        </div>

        <BoxGame game={game} index={index} />
        <div style={{ marginTop: "20px" }}>
          <Image
            src="https://gamedoithuong3.net/wp-content/uploads/2021/09/728manclub-1.gif"
            alt=""
            width="100%"
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          {reviews.length > 0 &&
            reviews.map((item: any, index: any) => {
              return <BoxContent key={index} data={item} />;
            })}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "0",
          left: "30px",
          backgroundColor: "red",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          fontSize: "12px",
          fontWeight: "700",
          color: "#fff",
        }}
      >
        Game Đánh Bài
      </button>
    </div>
  );
};
export default Content;

// const reviews = [
//   {
//     title: "Nhà cái Gowin",
//     contents: [
//       "mới xuất hiện trong thị trường châu Á một vài năm gần đây. Với kho game đồ sộ, sở hữu những game hot nhất thị trường. Nhà cái đã giúp rất nhiều người chơi có thu nhập đáng mơ ước trong thời gian ngắn tham gia. Bài viết sau đây Gowin sẽ giới thiệu nhà cái Gowin giúp bạn tìm hiểu và đánh giá khách quan về sân chơi này.",
//     ],
//     image: "",
//   },
//   {
//     title: "Giới thiệu tổng quan về lịch sử nhà cái Gowin",
//     contents: [
//       "Gowin có trụ sở tại Philippine và sở hữu giấy phép hoạt động hợp pháp được pháp luật công nhận. Đặc biệt, sân chơi này được GEOTRUST công nhận và cấp chứng chỉ là địa chỉ cá cược an toàn. Tất cả thông tin cá nhân của người chơi được bảo mật tuyệt đối, không bị bất cứ bên thứ 3 nào đánh cắp. Nhờ các chiến lược quảng bá mạnh mẽ kèm với sản phẩm chất lượng tốt, sân chơi ngày càng được nhiều người biết đến và tham gia đăng ký chơi.",
//       "Những năm gần đây, Gowin chú trọng mở rộng thị trường ở các nước châu Á và gần đây nhất là Việt Nam. Như đã giới thiệu nhà cái Gowin có thương hiệu kèm theo chất lượng sản phẩm đặc biệt là đá gà được nhiều người quan tâm. Những sảnh game của nhà cái luôn trong trạng thái full.",
//     ],
//     image:
//       "https://w.ladicdn.com/s1150x850/6422ce6d7b5c4b002cf8f9bf/photo_2024-02-20_13-02-06-20240220050227-dadvh.jpg",
//   },
//   {
//     title: "Sự nổi bật của nhà cái Gowin hiện nay",
//     contents: [
//       "Nói về điểm mạnh thì Gowin được biết nhờ có sự đầu tư tỉ mỉ vào chất lượng sản phẩm và là nhà cái có dịch vụ tốt. Nhà cái S26bet giữ chân người chơi nhờ một số điểm mạnh sau:",
//     ],
//     image: "",
//   },
//   {
//     title: "Đa dạng các sản phẩm game",
//     contents: [
//       "Giới thiệu nhà cái Gowin không thể không nhắc việc nó sở hữu hầu hết những game cá cược phổ biến hiện nay. Đó là các sản phẩm như: blackjack, baccarat, tài xỉu, Roulette,…giúp anh em dễ dàng lựa chọn sảnh game phù hợp. Số lượng đại lý đa dạng, thường xuyên cập nhật các game mới theo xu hướng bắt nguồn từ các nước phương Tây, Trung Hoa thậm chí cả một số game cổ.",
//       "Tỷ lệ cá cược, cách chơi của nhà cái khá hợp lý, đa phần người chơi đều cảm thấy hài lòng sau khi trải nghiệm. Những quy định về game đều được đưa ra rõ ràng và giải thích cụ thể tới người chơi. Tất cả đều vì mục đích đáp mang đến những trải nghiệm chân thật như đang chơi trực tiếp ở các sòng Casino đến người chơi.",
//     ],
//     image: "",
//   },
//   {
//     title: "Dịch vụ chăm sóc khách hàng của nhà cái Gowin hoạt động 24/24",
//     contents: [
//       "Dịch vụ hỗ trợ và chăm sóc khách hàng tại đây rất chuyên nghiệp, tận tình, phục vụ 24/24 bất cứ khi nào bạn cần. Nhân viên được chọn lựa kỹ càng, đào tạo bài bản nhằm hướng dẫn khách hàng chính xác nhất. Ngay khi gặp vấn đề người chơi có thể liên hệ để được hỗ trợ giải đáp vấn đề. Như vậy quá trình tham gia cá cược sẽ không bị gián đoạn nhất là không gặp một số sai lầm không đáng có.",
//       "Chất lượng CSKH của Gowin luôn được người chơi đánh giá cao. Mỗi trò chơi đều có chuyên mục phản hồi và đưa ra ý kiến riêng của người chơi với nhà cái. Sân chơi này tiếp nhận thông tin thắc mắc qua nhiều phương thức như: chat, hotline, facebook, zalo,… tất cả vấn đề của người chơi sẽ được giải quyết nhanh chóng.",
//     ],
//     image: "",
//   },
//   {
//     title: "Cá cược thể thao",
//     contents: [
//       "Cá cược thể thao là sản phẩm cá cược ăn khách nhất của Gowin, tại đây có hàng ngàn trò chơi cá cược mà bạn có thể tham gia. Từ bóng đá, môn thể thao vua có tỷ lệ người xem và đặt cược hàng đầu nhất thì bạn cũng có thể trải nghiệm những môn thể thao khác như bóng chuyền, tennis, đua ngựa, khúc côn cầu,..",
//       "Ngoài ra, còn có nhiều sự kiện thể thao khác được tường thuật trực tiếp và cập nhật thông tin đến người chơi mới nhất. Điều đặc biệt thu hút được người chơi đến với cá cược thể thao Gowin đó là sự đa dạng trong tỷ lệ cược và các loại cược mà nhà cái cung cấp như: kèo tài xỉu, kèo xiên, kèo chấp, kèo châu Á, Kèo trên dưới, và cược toàn trận,… với tỷ lệ cực kỳ hấp dẫn",
//     ],
//     imgae: "",
//   },
//   {
//     title: "Lời kết",
//     contents: [
//       "Như vậy nội dung trên đây Gowin đã chia sẻ tất cả các thông tin cần biết giới thiệu nhà cái Gowin . Mong rằng bài viết sẽ giúp người chơi có thêm kiến thức hữu ích trong quá trình tham gia giải trí ở Gowin . Chúc bạn may mắn và gặt hái thành công khi tham gia chơi tại sân chơi uy tín này nhé.",
//     ],
//     image: "",
//   },
// ];
// const reviews2 = [
//   {
//     title: "Nhà cái Gowin",
//     contents: [
//       "mới xuất hiện trong thị trường châu Á một vài năm gần đây. Với kho game đồ sộ, sở hữu những game hot nhất thị trường. Nhà cái đã giúp rất nhiều người chơi có thu nhập đáng mơ ước trong thời gian ngắn tham gia. Bài viết sau đây S26bet sẽ giới thiệu nhà cái Gowin giúp bạn tìm hiểu và đánh giá khách quan về sân chơi này.",
//     ],
//     image: "",
//   },
//   {
//     title: "Giới thiệu tổng quan về lịch sử nhà cái Gowin",
//     contents: [
//       "Gowin có trụ sở tại Philippine và sở hữu giấy phép hoạt động hợp pháp được pháp luật công nhận. Đặc biệt, sân chơi này được GEOTRUST công nhận và cấp chứng chỉ là địa chỉ cá cược an toàn. Tất cả thông tin cá nhân của người chơi được bảo mật tuyệt đối, không bị bất cứ bên thứ 3 nào đánh cắp. Nhờ các chiến lược quảng bá mạnh mẽ kèm với sản phẩm chất lượng tốt, sân chơi ngày càng được nhiều người biết đến và tham gia đăng ký chơi.",
//       "Những năm gần đây, Gowin  chú trọng mở rộng thị trường ở các nước châu Á và gần đây nhất là Việt Nam. Như đã giới thiệu nhà cái Gowin có thương hiệu kèm theo chất lượng sản phẩm đặc biệt là đá gà được nhiều người quan tâm. Những sảnh game của nhà cái luôn trong trạng thái full.",
//     ],
//     image:
//       "https://w.ladicdn.com/s1150x850/6422ce6d7b5c4b002cf8f9bf/photo_2024-02-20_13-02-06-20240220050227-dadvh.jpg",
//   },
//   {
//     title: "Sự nổi bật của nhà cái Gowin hiện nay",
//     contents: [
//       "Nói về điểm mạnh thì BBCGoals được biết nhờ có sự đầu tư tỉ mỉ vào chất lượng sản phẩm và là nhà cái có dịch vụ tốt. Nhà cái S26bet giữ chân người chơi nhờ một số điểm mạnh sau:",
//     ],
//     image: "",
//   },
// ];
