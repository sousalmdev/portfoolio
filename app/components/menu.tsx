import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  MenuDivider,
} from "@chakra-ui/react";
import {
  BiChat,
  BiMenu,
  BiSolidArchive,
  BiSolidContact,
  BiSolidHeart,
  BiSolidLock,
  BiUser,
} from "react-icons/bi";
import Link from "next/link";
import { TbPuzzle } from "react-icons/tb";

export const MenuUi = () => {
  return (
    <div className={`sm:hidden`}>
      <Menu>
        <MenuButton className="text-green-400">
          <BiMenu size={"24px"} />
        </MenuButton>
        <MenuList
          background={"black"}
          textAlign={"right"}
          color={"rgb(74 222 128)"}
        >
          <MenuItem
            as={Link}
            href={"https://portfoleosous.vercel.app/#presentation"}
            className="flex justify-between"
            icon={BiUser(Icon)}
            background={"black"}
          >
            Início & Artigos
          </MenuItem>

          <MenuItem
            as={Link}
            href="#projects"
            className="flex justify-between"
            icon={BiSolidArchive(Icon)}
            background={"black"}
          >
            Projetos
          </MenuItem>
          <MenuItem
            as={Link}
            href={"#skills"}
            icon={TbPuzzle(Icon)}
            background={"black"}
          >
            Habilidades
          </MenuItem>
          <MenuItem
            as={Link}
            href={"#about"}
            icon={BiSolidHeart(Icon)}
            background={"black"}
          >
            Sobre
          </MenuItem>
          <MenuItem
            as={Link}
            href={"#contact"}
            icon={BiSolidContact(Icon)}
            background={"black"}
          >
            Contato
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
