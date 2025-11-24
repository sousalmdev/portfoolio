import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import {
  BiMenu,
  BiUser,
  BiSolidArchive,
  BiSolidHeart,
  BiSolidContact,
} from "react-icons/bi";
import { TbPuzzle } from "react-icons/tb";
import Link from "next/link";

export const MenuUi = () => {
  return (
    <div className="sm:hidden">
      <Menu>
        <MenuButton className="text-green-400">
          <BiMenu size="24px" />
        </MenuButton>

        <MenuList
          background="black"
          textAlign="right"
          color="rgb(74 222 128)"
        >
          <MenuItem
            as={Link}
            href="https://portfoleosous.vercel.app/#presentation"
            className="flex justify-between"
            icon={<BiUser />}
            background="black"
          >
            Home & Articles
          </MenuItem>

          <MenuItem
            as={Link}
            href="#projects"
            className="flex justify-between"
            icon={<BiSolidArchive />}
            background="black"
          >
            Projects
          </MenuItem>

          <MenuItem
            as={Link}
            href="#skills"
            icon={<TbPuzzle />}
            background="black"
          >
            Skills
          </MenuItem>

          <MenuItem
            as={Link}
            href="#about"
            icon={<BiSolidHeart />}
            background="black"
          >
            About
          </MenuItem>

          <MenuItem
            as={Link}
            href="#contact"
            icon={<BiSolidContact />}
            background="black"
          >
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
