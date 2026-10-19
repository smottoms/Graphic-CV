import type { Metadata } from "next";
import { Outfit, Sacramento } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Toms Johnson | Graphic & Motion Graphic Designer",
  description:
    "Portfolio & Interactive Curriculum Vitae of Toms Johnson — Graphic and Motion Graphic Designer based in Andheri East, Mumbai. Experienced in brand visuals, motion graphics, event design, and digital storytelling.",
  icons: {
    icon: "/cat-favicon.svg",
    shortcut: "/cat-favicon.svg",
    apple: "/cat-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sacramento.variable}`}>
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#1C1917] selection:bg-[#9E7B56] selection:text-white">
        {children}
      </body>
    </html>
  );
}

