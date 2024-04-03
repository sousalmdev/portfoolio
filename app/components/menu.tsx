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
import { BiMenu, BiSolidLock,BiUser } from 'react-icons/bi';
import Link from 'next/link';
export const MenuUi = () => {
    return (
        <div className={`${jost.className} flex self-end text-right sm:hidden`}>
            <Menu>
           <MenuButton className=' text-green-400'>
           <BiMenu size={'24px'}/>
           </MenuButton>
                <MenuList  background={'black'} textAlign={'right'}  color={'rgb(74 222 128)'}>
                    <MenuItem className='flex justify-between' icon={BiUser(Icon)}  background={'black'}>
                   <Link passHref href="https://leonewport.vercel.app/about">About</Link> 
                    </MenuItem>
                
                    <MenuItem disabled className='flex justify-between' icon={BiSolidLock(Icon)}   background={'black'}>
                    <Link passHref href="https://leonewport.vercel.app/privacy">Legal (not ready yet calm down!!!)</Link>
                    </MenuItem>
                  
                </MenuList>
            </Menu>
        </div>
    );
};
