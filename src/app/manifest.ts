import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Top Game Bài Đổi Thưởng Uy Tín ",
    short_name: "Top Game Bài Đổi Thưởng Uy Tín ",
    description:
      " Top Game Bài Đổi Thưởng Uy Tín 2024 - Game bài đổi thưởng online, game bài online, game bài trực tuyến, game bài đổi thưởng uy tín, game bài đổi thưởng, game bài đổi thưởng 2024, game bài đổi thưởng uy tín 2024, game bài đổi thưởng online uy tín, game bài đổi thưởng online 2024, game bài đổi thưởng online uy tín 2024, game bài đổi thưởng online uy tín, game bài đổi thưởng online 2024, game bài đổi thưởng online uy tín 2024, game bài đổi thưởng online uy tín, game bài đổi thưởng online 2024, game bài đổi thưởng online uy tín 2024",
    icons: [
      {
        src: "https://w.ladicdn.com/6422ce6d7b5c4b002cf8f9bf/gowin-xin-chao-1-20240227093849-p_2jw.gif",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://w.ladicdn.com/6422ce6d7b5c4b002cf8f9bf/gowin-xin-chao-1-20240227093849-p_2jw.gif",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#1A94FF",
    background_color: "#1A94FF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid",
        id: "vn.tiki.app.tikiandroid",
      },
      {
        platform: "itunes",
        url: "https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553",
      },
      {
        platform: "webapp",
        url: "https://tiki.vn/manifest.json",
      },
    ],
    scope: "/",
  };
}
