/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  Avatar,
  CardHeader,
  CardBody,
  Text,
  Stack,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export const PeopleCard = () => {
  return (
    <div className="flex items-center md:justify-center w-full text-center justify-center py-5 md:py-20 h-auto">
      <ul>
        <li>
          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"black"}
            color={"rgb(74 222 128)"}
            className="w-full flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className=" w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Lucas Fonseca"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQHj5xU6lZ7e2Q/profile-displayphoto-shrink_200_200/0/1712514674464?e=1718236800&v=beta&t=tkJHMlOVj-Lg3-yQ8F5o4CY4PEVZz2J0w0WWC67vtGA"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-sm md:text-3xl pt-2">
                  'Leo is a very effortful and productive guy, his skills to
                  learning the enough to work with a different thing is
                  unbelievable, an 'out of the box' communication, which makes
                  people feel no need to ask a question twice.'
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-center text-sm md:text-2xl w-full text-white">
                  ~ Lucas Fonseca - Full Stack Developer <br />
                  <span className="text-green-400 font-bold ">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"https://www.linkedin.com/in/lucasrlfonseca/"}
                      target="_blank"
                    >
                      {" "}
                      lucasrlfonseca
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>
        <br />
        <li>
          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"black"}
            color={"rgb(74 222 128)"}
            className="w-full flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className=" w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Victor Lucena"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQFie6xxIO--PA/profile-displayphoto-shrink_800_800/0/1711505643258?e=1717632000&v=beta&t=Y_rkuiVfs_yX4NgtJZz4-oNprsoijlC8ldiG-MtpavE"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-sm md:text-3xl pt-2">
                  'Leo is an excellent developer. He has great dedication and
                  care with his projects, as well as a quick ability to adapt to
                  the use of different technologies.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Victor Lucena - Angular + Java Developer <br />
                  <span className="text-green-400 font-bold ">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={
                        "https://www.linkedin.com/in/victor-lucena-2ba1b6175/"
                      }
                      target="_blank"
                    >
                      {" "}
                      victorlucena
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>
        <br />
        <li>
          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"black"}
            color={"rgb(74 222 128)"}
            className="w-full flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className=" w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Victor Lucena"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQElQtSZ1iN1rQ/profile-displayphoto-shrink_800_800/0/1696209508879?e=1717632000&v=beta&t=PiRqMIk3UuLs5sVLvRHDhW8n4Wz71l_pm9KOiIa71nY"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-sm md:text-3xl pt-2">
                  'Leo is a skillful programmer, for him, there's no easy or
                  difficult job. There is something to be done. He is the type
                  of person addicted to technology who can learn anything if he
                  has the time to do so. It's impressive.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Matheus Santana - Software Engineer <br />
                  <span className="text-green-400 font-bold ">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"https://www.linkedin.com/in/omatheussant/"}
                      target="_blank"
                    >
                      {" "}
                      omatheussant
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>
        <li>
          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"black"}
            color={"rgb(74 222 128)"}
            className="w-full flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className=" w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Debora Viana"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D5603AQGOeFEWRQGq3w/profile-displayphoto-shrink_200_200/0/1684949111534?e=1718236800&v=beta&t=DcioNBgIahh0lQt8fQpTLYzV97Tk0KzqieD28yzX40w"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-sm md:text-3xl pt-2">
                  'Leo is an amazing person, who chases his goals despite the
                  obstacles, his ability to absorb knowledge about whatever he
                  wants to learn it's a beautiful thing. And at the same time he
                  learns, he gave his time to help whoever needs his help. An
                  example to be followed as a person and as a professional.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Debora Viana - Graphic Designer / DebSigner CEO <br />
                  <span className="text-green-400 font-bold ">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"http://linkedin.com/in/débora-viana-294b20272"}
                      target="_blank"
                    >
                      {" "}
                      deboraviana
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>
      </ul>
    </div>
  );
};
