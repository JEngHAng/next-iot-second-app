import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  
});



export const metadata: Metadata = {
  title: "IOT SAU 2026",
  description:
    "สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเอเชียอาคเนย์",
  keywords: [
    "IOT",
    "SAU",
    "2026",
    "Computer Engineering",
    "Southeast Asia University",
    "Engineering",
    "คอมพิวเตอร์",
    "วิศวกรรมศาสตร์",
    "มหาวิทยาลัยเอเชียอาคเนย์",
  ],
  icons: [
    {
      url: "/next.svg",
    },
  ],
  authors: [{ name: "IOT SAU 2026", url: "https://iot.sau.ac.th" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        {children}
      </body>
    </html>
  );
}
