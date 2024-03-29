"use client";
import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Image, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/styles.scss";

const items: MenuProps["items"] = [
  {
    label: <Link href={"/"}>Trang chủ</Link>,
    key: "homepage",
    // icon: <MailOutlined />,
  },
  {
    label: <Link href={"/card-game"}>Game Đánh Bài</Link>,
    key: "cardgame",
    // icon: <MailOutlined />,
  },
  {
    label: <Link href={"/shoot-fish-and-get-prizes"}>Bắn Cá Đổi Thưởng</Link>,
    key: "ShootFishGetPrizes",
    // icon: <AppstoreOutlined />,
  },
  {
    label: (
      <Link href={"/spin-the-jar-to-exchange-prizes"}>Quay Hũ Đổi Thưởng</Link>
    ),
    key: "SpinJarExchangePrizes",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/betting-guide"}>Hướng Dẫn Cá Cược</Link>,
    key: "BettingGuide",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/game-tips"}>Thủ Thuật Game</Link>,
    key: "GameTips",
    // icon: <AppstoreOutlined />,
  },
  {
    label: <Link href={"/gift-code"}>GiftCode</Link>,
    key: "GiftCode",
    // icon: <AppstoreOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("homepage");

  const pathName = usePathname();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div className="header-wrapper">
        <h2
          style={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "28px",
          }}
        >
          {pathName.split("/")[1] === "card-game"
            ? "Game Đánh Bài - Tải Game Đánh Bài Online, Offline Miễn Phí 2024"
            : pathName.split("/")[1] === "shoot-fish-and-get-prizes"
            ? "Bắn Cá Đổi Thưởng Thẻ Cào - TOP 10+ Game Bắn Cá Online Uy Tín 2021"
            : pathName.split("/")[1] === "spin-the-jar-to-exchange-prizes"
            ? "Quay Hũ Đổi Thưởng - TOP 10 Game SLot, Nổ Hũ Đổi Thưởng Uy Tín 2021"
            : pathName.split("/")[1] === "betting-guide"
            ? "Hướng dẫn cá cược 🥇 Hướng dẫn cách chơi game bài chiến thắng 100%"
            : pathName.split("/")[1] === "game-tips"
            ? "Thủ Thuật"
            : pathName.split("/")[1] === "gift-code"
            ? "1000+ GiftCode 🥇 Game Đổi Thưởng Tặng Vốn, Code Tân Thủ Khởi Nghiệp"
            : "Game Bài Đổi Thưởng – Tổng hợp cổng game đổi thưởng uy tín của đầu năm nay 3/2024"}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
        className="header-images"
      >
        <Image
          src="https://gamedoithuong3.net/wp-content/uploads/2022/09/logo.png"
          alt=""
          height="90px"
        />
        <Image
          src="https://w.ladicdn.com/6422ce6d7b5c4b002cf8f9bf/tham-gia-ngay-11-20240219071705-kccfr.gif"
          alt=""
          height="90px"
        />
      </div>
      <div
        style={{
          backgroundColor: "#fff",
        }}
        className="header-menu"
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </>
  );
};

export default Header;
