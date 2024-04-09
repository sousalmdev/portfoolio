import React from "react";
import { Avatar, AvatarBadge, AvatarGroup, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import { MenuUi } from "@/app/components/menu";
import { MdVerified } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import leo from "@/app/assets/Imagem do WhatsApp de 2024-04-04 à(s) 23.13.22_5cc7a10f.jpg";
export const Header = () => {
  return (
    <header
      className={` bg-black/50 backdrop-blur sticky top-0 p-2 bg-black z-50  text-white w-11/12 md:w-3/4 flex items-center md:justify-between justify-between `}
    >
      <div id="title" className="flex gap-4 py-2 items-center">
        <Avatar size="xs" name="Leo Sousa" src={leo.src} objectFit={`cover`} />
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
            <Button
              as={Link}
              href={"#contact"}
              variant={"outline"}
              borderColor={"rgb(74 222 128)"}
              color={"rgb(74 222 128)"}
              rightIcon={BiSolidContact(Icon)}
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
