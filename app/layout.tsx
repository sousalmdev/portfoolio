import { ChakraProvider, Button, Icon } from "@chakra-ui/react";
import { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt" translate="yes">
      <head>
        <meta name="theme-color" content="#1b2631" />
      </head>
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
