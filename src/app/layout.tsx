import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/antd.registry";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Game bài đổi thưởng",
  description: "Top Game bài đổi thưởng",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Top Game bài đổi thưởng",
  image: {
    "@type": "ImageObject",
    url: "https://w.ladicdn.com/6422ce6d7b5c4b002cf8f9bf/gowin-xin-chao-1-20240227093849-p_2jw.gif",
    width: 1080,
    height: 1080,
  },
  telephone: "00000000",
  url: "https://topgamebaidoithuong.vn/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ko noi dau",
    addressLocality: "ko noi dau",
    postalCode: "700000",
    addressRegion: "ko noi dau",
    addressCountry: "ko noi dau",
  },
  priceRange: "1000 - 1000000000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.79664498748942",
    longitude: "106.65856519879867",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#dedcd7", padding: "0" }}
      >
        <StyledComponentsRegistry>
          <Header />
          <div style={{ minHeight: "calc(100vh - 407px" }}>{children}</div>
          <Footer />
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="lazyOnload"
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
