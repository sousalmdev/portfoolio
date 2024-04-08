import { ChakraProvider,Button, Icon } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import leo from "@/app/assets/Imagem do WhatsApp de 2024-04-04 à(s) 23.13.22_5cc7a10f.jpg";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { MenuUi } from "./components/menu";
import { MdVerified } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";


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
    <html className="scroll-smooth" translate="yes">
      <head>
        <meta name="theme-color" content="#1b2631" />
      </head>
      <ChakraProvider>
        <body
          className={`${jost.className} bg-black flex-col h-min-screen flex text-left items-center`}
        >
          <header
            className={` bg-black/50 backdrop-blur sticky top-0 p-2 bg-black z-50  text-white w-11/12 md:w-3/4 flex items-center md:justify-between justify-between `}
          >
            <div id="title" className="flex gap-4 py-2 items-center">
              <Avatar
                size="xs"
                name="Leo Sousa"
                src={leo.src}
                objectFit={`cover`}
              />
              <h2 className="font-bold flex items-center">
                Leo Sousa{" "}
                <span>
                  <MdVerified className="text-blue-500" />
                </span>{" "}
              </h2>
            </div>
            <div>
              <MenuUi />
            </div>
            <nav className=" hidden sm:flex justify-end">
              <ul className="flex text-sm md:text-base gap-5 items-center">
                <li className="hover:text-green-400 transition-all">
                  <Link href="#presentation">Home</Link>
                </li>
                <li className="hover:text-green-400 transition-all">
                  <Link href="#projects">Projects</Link>
                </li>
                <li className="hover:text-green-400 transition-all">
                  <Link href="#skills">Skills</Link>
                </li>
                <li className="hover:text-green-400 transition-all">
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Button as={Link} href={'#contact'} variant={'outline'} borderColor={'rgb(74 222 128)'} color={'rgb(74 222 128)'} rightIcon={BiSolidContact(Icon)}>
                    Contact
                  </Button>
                </li>
              </ul>
            </nav>
          </header>

          {children}

          <footer
            className={` absolute bottom-0 pt-2 md:p-1  pb-20 bg-green-400 w-full text-black flex items-center justify-center  ${jost.className}`}
          >
            <ul className="flex items-center md:justify-evenly md:gap-0 justify-center text-center md:w-3/4 w-11/12 gap-7  text-sm md:text-base">
              <li className="flex gap-2">
                <p className="font-bold">©2024</p>
                <Link href="/" className="underline">
                  <p>Leo Sousa</p>
                </Link>
              </li>

          
              <li className="flex gap-2">
                <p className="font-bold">Legal</p>
                <Link href={"/privacy"} className="underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </footer>
        </body>{" "}
      </ChakraProvider>
    </html>
  );
}
