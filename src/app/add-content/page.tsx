import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Add Content",
  description: "Add Content",
};

const AddContent = async () => {
  return (
    <div className="add-review-wrapper">
      <h1>Add Content</h1>
      <div className="row text-center" style={{ gap: "10px" }}>
        <Link href={"/add-content/home-page"}>Trang chủ</Link>
        <Link href={"/add-content/page-2"}>Game Đánh Bài</Link>
        <Link href={"/add-content/page-3"}>Bắn Cá Đổi Thưởng</Link>
        <Link href={"/add-content/page-4"}>Quay Hũ Đổi Thưởng</Link>
        <Link href={"/add-content/page-5"}>Hướng Dẫn Cá Cược</Link>
        <Link href={"/add-content/page-6"}>Thủ Thuật Game</Link>
        <Link href={"/add-content/page-7"}>GiftCode</Link>
      </div>
    </div>
  );
};

export default AddContent;
