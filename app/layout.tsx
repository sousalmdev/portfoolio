import { ChakraProvider, Button, Icon } from "@chakra-ui/react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Metatags } from "./metatags/metatags";
import { Suspense } from "react";
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
      <Metatags />
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
