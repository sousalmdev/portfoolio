import { ChakraProvider } from "@chakra-ui/react";
import { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import favicon from "@/app/assets/favicon.ico";
import { Analytics } from "@vercel/analytics/react";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Leo Sousa — Portfolio",
  description:
    "Leo Sousa is a Brazilian Front-End Developer and UI Designer crafting clean, modern and high-impact digital experiences. Specialized in React, Next.js and visual design.",
  icons: {
    shortcut: favicon.src,
    apple:
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/portfoleosous.vercel.app/Portfolio%20Leandro%20Sousa/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Feb259247-642b-43a0-8a2d-03363dea6f0f.png%3Ftoken%3D_y5oElq8g65X7ZOuaTPm0Rw5SkONb7SLhhFUOp-um0Y%26height%3D640%26width%3D640%26expires%3D33248775339/og.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ChakraProvider>
        <body
          className={`${grotesk.className} bg-[#171717] text-[#D9D9D9] leading-tight tracking-tight flex flex-col items-center min-h-screen`}
        >
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
      </ChakraProvider>
    </html>
  );
}
