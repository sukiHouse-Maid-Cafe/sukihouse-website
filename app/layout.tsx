import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sukiHouse 妹抖咖啡厅",
  description: "欢迎光临sukiHouse，体验最可爱的妹抖咖啡厅！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
