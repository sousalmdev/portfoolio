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
import { jost } from "../layout";
import { TbMenu } from "react-icons/tb";
import { BiMenu, BiSolidLock, BiUser } from "react-icons/bi";
import Link from "next/link";
export const MenuUi = () => {
  return (
    <div className={`${jost.className} flex self-end text-right sm:hidden`}>
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
            as={'a'}
            href={"/about"}
            className="flex justify-between"
            icon={BiUser(Icon)}
            background={"black"}
          >
            About
          </MenuItem>

          <MenuItem
            disabled
            as={'a'}
            href="https://leonewport.vercel.app/privacy"
            className="flex justify-between"
            icon={BiSolidLock(Icon)}
            background={"black"}
          >
            Legal (not ready yet calm down!!!)
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
