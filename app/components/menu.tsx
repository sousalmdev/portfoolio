import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Icon,
    MenuDivider
} from '@chakra-ui/react';
import { jost } from '../layout';
import { TbMenu } from 'react-icons/tb';
import { BiBrain, BiHome, BiMap, BiMenu, BiNews, BiSolidBrain, BiSolidHome, BiSolidMap, BiSolidUser, BiUser } from 'react-icons/bi';
import Link from 'next/link';


export const MenuUi = () => {
    return (
        <div className={`${jost.className} flex self-end text-right sm:hidden`}>
            <Menu>
           <MenuButton className=' text-green-400'>
           <BiMenu size={'24px'}/>
           </MenuButton>
                <MenuList width={'fit-content'} background={'black'} textAlign={'right'}  color={'rgb(74 222 128)'}>
                    <MenuItem icon={BiNews(Icon)}  background={'black'}>
                   <Link href="#presentation">Home & Articles</Link>
                    </MenuItem>
                
                    <MenuItem  icon={BiSolidMap(Icon)}   background={'black'}>
                    <Link href="#projects">Projects</Link>
                    </MenuItem>
                    <MenuItem  icon={BiSolidBrain(Icon)}  background={'black'}>
                    <Link href="#skills">Skills</Link>
                    </MenuItem>
                    <MenuItem icon={BiSolidUser(Icon)}  background={'black'}>
                   <Link href="#me">About</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};
