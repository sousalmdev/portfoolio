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
import { BiMenu, BiSolidArchive, BiSolidLock, BiUser } from "react-icons/bi";
import Link from "next/link";
export const MenuUi = () => {
  return (
    <div className={` flex self-end text-right sm:hidden`}>
      <Menu>
        <MenuButton className=" text-green-400">
          <BiMenu size={"24px"} />
        </MenuButton>
        <MenuList
          background={"black"}
          textAlign={"right"}
          color={"rgb(74 222 128)"}
        >

          <MenuItem
            as={Link}
            href={"#about"}
            className="flex justify-between"
            icon={BiUser(Icon)}
            background={"black"}
          >
            About
            
          </MenuItem>

          <MenuItem
            
            as={Link}
            href="#projects"
            className="flex justify-between"
            icon={BiSolidArchive(Icon)}
            background={"black"}
          
          >
            Projects
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
