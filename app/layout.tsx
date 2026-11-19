import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-b2b.neoma.kr"),
  title: "NEXUS B2B Commerce | 차세대 기업간 거래 디지털 통합 솔루션 - 주식회사 네오마",
  description: "복잡한 기업간 거래 관행을 완벽한 디지털로 통합. 제조사·유통사를 위한 무중단 ERP 연동, 법인카드 분할결제, 정기공급 자동 빌링, 지능형 분할배송 B2B 커머스 솔루션.",
  keywords: [
    "NEXUS B2B",
    "B2B 커머스",
    "네오마",
    "ERP 연동",
    "SAP 연동",
    "더존 연동",
    "법인카드 분할결제",
    "정기공급 자동빌링",
    "로젠 송장 자동화",
    "폐쇄몰 솔루션",
    "엔터프라이즈 커머스"
  ],
  authors: [{ name: "주식회사 네오마 (Neoma Inc.)" }],
  openGraph: {
    title: "NEXUS B2B Commerce | 복잡한 기업간 거래를 완벽한 디지털로 통합",
    description: "무중단 ERP 연동 · 법인카드 분할결제 · 정기공급 자동 빌링 · 지능형 분할배송. 엔터프라이즈 B2B 커머스의 표준, NEXUS B2B.",
    url: "https://nexus-b2b.neoma.kr",
    siteName: "NEXUS B2B Commerce",
    images: [
      {
        url: "/slides/hero-cube.jpg",
        width: 1200,
        height: 630,
        alt: "NEXUS B2B Commerce Solutions",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS B2B Commerce 솔루션",
    description: "복잡한 기업간 거래 관행을 완벽한 디지털로 통합",
    images: ["/slides/hero-cube.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
