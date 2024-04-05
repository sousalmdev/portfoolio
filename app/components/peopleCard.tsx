/* eslint-disable react/no-unescaped-entities */
import { Card, Avatar, CardHeader, CardBody, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

export const PeopleCard = () => {
  return (
    <div className="flex items-center justify-center md:justify-start py-5 md:py-20 h-auto">
      <Card
        direction={{ base: 'row', sm: 'row' }}
        overflow="hidden"
        outlineColor={'rgb(74 222 128)'}
        bg={'black'}
        color={'rgb(74 222 128)'}
        className="w-11/12 md:w-2/4"
        padding={0}
      >
        <Stack>
          <CardBody className=" w-full">
            <CardHeader className="flex items-center justify-start gap-4 md:gap-2 text-white">
              <Avatar
                name="Lucas Fonseca"
                alignSelf={'center'}
                src="https://media.licdn.com/dms/image/D4D03AQGNdXp8srncpA/profile-displayphoto-shrink_800_800/0/1710185956336?e=1717632000&v=beta&t=DwRdalwIO3pgqo6Z7xNt_fa7pOnJH8jvgonc8Cfz2uI"
                size={{ base: 'sm', sm: 'md' }}
              />
              <div className="flex-col">
                <Text className='text-sm md:text-2xl w-full'>
                Lucas Fonseca - Full Stack Developer <br />
                <span className="text-green-400 font-bold "><Link className='underline decoration-green-400' href={'https://www.linkedin.com/in/lucasrlfonseca/'}> @lucasfonseca</Link></span></Text>
              </div>
            </CardHeader>
            <Text className="md:ml-5 m-0 w-full text-sm md:text-2xl py-2">
              'Leo is a very efforted and productive guy, his skills to learning the enough to work with a different thing is unbelievable, an 'out of the box' communication, which makes people feel no need to ask a question twice.'
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};
