import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edit Content",
  description: "Edit Content",
};

const AddContent = async () => {
  return (
    <div className="add-review-wrapper">
      <h1>Add Content</h1>
      <div className="row text-center" style={{ gap: "10px" }}>
        <Link href={"/edit-content/home-page"}>Trang chủ</Link>
        <Link href={"/edit-content/page-2"}>Game Đánh Bài</Link>
        <Link href={"/edit-content/page-3"}>Bắn Cá Đổi Thưởng</Link>
        <Link href={"/edit-content/page-4"}>Quay Hũ Đổi Thưởng</Link>
        <Link href={"/edit-content/page-5"}>Hướng Dẫn Cá Cược</Link>
        <Link href={"/edit-content/page-6"}>Thủ Thuật Game</Link>
        <Link href={"/edit-content/page-7"}>GiftCode</Link>
      </div>
    </div>
  );
};

export default AddContent;
