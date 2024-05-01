import { ChakraProvider } from "@chakra-ui/react";
import { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const jost = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Portfolio Leandro Sousa",
  description:
    "My name is Leandro Medeiros de Sousa, a brazilian developer, born in Rio de Janeiro. I had my first touch with programming through the CC50 Harvard Course, first meeting C language and Programming Logic. After that, I went full on Front End Development, because I feel familiar to art and creative stuff.",
  openGraph: {
    url: "https://portfoleosous.vercel.app/",
    type: "website",
    images:
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/portfoleosous.vercel.app/Portfolio%20Leandro%20Sousa/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Feb259247-642b-43a0-8a2d-03363dea6f0f.png%3Ftoken%3D_y5oElq8g65X7ZOuaTPm0Rw5SkONb7SLhhFUOp-um0Y%26height%3D640%26width%3D640%26expires%3D33248775339/og.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "portfoleosous.vercel.app",
    title: "Portfolio Leandro Sousa",
    images:
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/portfoleosous.vercel.app/Portfolio%20Leandro%20Sousa/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Feb259247-642b-43a0-8a2d-03363dea6f0f.png%3Ftoken%3D_y5oElq8g65X7ZOuaTPm0Rw5SkONb7SLhhFUOp-um0Y%26height%3D640%26width%3D640%26expires%3D33248775339/og.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2631",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-br">
      <ChakraProvider>
        <body
          className={`${jost.className} bg-black flex-col h-min-screen flex text-left items-center`}
        >
          <Header />
          {children}
          <Footer />
        </body>{" "}
      </ChakraProvider>
    </html>
  );
}
