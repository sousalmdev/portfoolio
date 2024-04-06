import React from 'react';
import { dm } from '../fonts/dm-sans';
import { Divider,ButtonGroup,Button, Icon } from '@chakra-ui/react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useToast } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';
export const Contact = () => {
    
  

  return (
    <div
    id="contact"
    className="animate-fade-in-bottom pb-20 text-center w-11/12 md:w-full"
  >
    <div className="flex items-center gap-1 md:pb-20 p-0 justify-center">
 
          <h2 className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold `}>INTERESTED?</h2>
    
          </div>
    <br />
    <ButtonGroup spacing={{ base:0,md:16,xl:16}} className='md:gap-0 gap-3 items-center justify-center md:flex-row flex-col'>
    <Button as={Link}  fontSize={{base:'medium',md:'x-large',xl:'x-large'}} href={'https://linkedin.com/in/leosousadev'} border={'.5px solid rgb(74 222 128)'} _hover={{bgColor:'black'}} bgColor={'black'} color={'rgb(74 222 128)'} leftIcon={BiLogoLinkedin(Icon)} >Find me on LinkedIn</Button>
    <Button as={Link}  fontSize={{base:'medium',md:'x-large',xl:'x-large'}} href={'https://github.com/sousalmdev'} border={'.5px solid rgb(74 222 128)'} bgColor={'black'} _hover={{bgColor:'black',color:'rgb 74 222 128'}} color={'rgb(74 222 128)'} paddingInline={{base:'23px'}} leftIcon={BiLogoGithub(Icon)}>Find me on Github</Button>
  </ButtonGroup>
  <div className="flex items-center gap-1  md:py-20 py-10  justify-center">
    <Divider width={100} />
          <h2 className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold `}>OR</h2>
          <Divider width={100} />
          </div>
          <Button as={Link}  fontSize={{base:'medium',md:'x-large',xl:'x-large'}} href={' mailto:leandromedeiros690@gmail.com'} border={'.5px solid rgb(74 222 128)'} bgColor={'black'} _hover={{bgColor:'black',color:'rgb 74 222 128'}} color={'rgb(74 222 128)'} paddingInline={{base:'23px'}} leftIcon={BiLogoGmail(Icon)}>Send me an e-mail</Button>

    </div>
  )
}
