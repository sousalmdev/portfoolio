/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  Avatar,
  CardHeader,
  CardBody,
  Text,
  Stack,
  CardFooter,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const PeopleCard = () => {
  return (
    <div className="flex items-center md:justify-center w-full text-center justify-center py-5 md:py-20 h-auto">
      <ul>
                <li className=" border border-[#23f392] p-6 md:w-1/2 mx-auto rounded-xl">

          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"#171717"}
            color={"rgb(74 222 128)"}
            className="w-full border border-[#23f392] rounded-xl flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className="w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Lucas Fonseca"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQHj5xU6lZ7e2Q/profile-displayphoto-shrink_200_200/0/1712514674464?e=1718236800&v=beta&t=tkJHMlOVj-Lg3-yQ8F5o4CY4PEVZz2J0w0WWC67vtGA"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-lg md:text-xl pt-2 text-white">
                  "Leo is extremely hardworking and productive. His ability to learn exactly what he needs to tackle new challenges is impressive. His communication is truly 'out of the box,' which means people never have to ask him the same thing twice."
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-center text-base md:text-3xl w-full text-white">
                  ~ Lucas Fonseca – Full Stack Developer <br />
                  <span className="text-green-400 font-bold">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"https://www.linkedin.com/in/lucasrlfonseca/"}
                      target="_blank"
                    >
                      lucasrlfonseca
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>

        <br />

        <li className=" border border-[#23f392] p-6 md:w-1/2 mx-auto rounded-xl">
          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"#171717"}
            color={"rgb(74 222 128)"}
            className="w-full flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className="w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Victor Lucena"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQFie6xxIO--PA/profile-displayphoto-shrink_800_800/0/1711505643258?e=1717632000&v=beta&t=Y_rkuiVfs_yX4NgtJZz4-oNprsoijlC8ldiG-MtpavE"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-lg md:text-xl pt-2 text-white">
                  "Leo is an excellent developer. He shows great dedication and care for his projects, along with a fast adaptability to different technologies."
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-base md:text-3xl text-white w-full">
                  ~ Victor Lucena – Angular + Java Developer <br />
                  <span className="text-green-400 font-bold">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"https://www.linkedin.com/in/victor-lucena-2ba1b6175/"}
                      target="_blank"
                    >
                      victorlucena
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>

        <br />

                <li className=" border border-[#23f392] p-6 md:w-1/2 mx-auto rounded-xl">

          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"#171717"}
            color={"rgb(74 222 128)"}
            className="w-full border border-[#23f392] rounded-xl flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className="w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Matheus Santana"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D4D03AQElQtSZ1iN1rQ/profile-displayphoto-shrink_800_800/0/1696209508879?e=1717632000&v=beta&t=PiRqMIk3UuLs5sVLvRHDhW8n4Wz71l_pm9KOiIa71nY"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-lg md:text-xl pt-2 text-white">
                  "Leo is a highly skilled developer. For him, there’s no easy or hard task — there’s simply something that needs to be done. He’s a tech-driven guy who can learn absolutely anything if given time. Truly impressive."
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-base md:text-3xl text-white w-full">
                  ~ Matheus Santana – Software Engineer <br />
                  <span className="text-green-400 font-bold">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"https://www.linkedin.com/in/omatheussant/"}
                      target="_blank"
                    >
                      omatheussant
                    </Link>
                  </span>
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </li>

        <br />

                <li className=" border border-[#23f392] p-6 md:w-1/2 mx-auto rounded-xl">

          <Card
            direction={{ base: "row", sm: "row" }}
            overflow="hidden"
            outlineColor={"rgb(74 222 128)"}
            bg={"#171717"}
            color={"rgb(74 222 128)"}
            className="w-full border border-[#23f392] rounded-xl flex flex-col items-center justify-center"
            padding={0}
          >
            <Stack>
              <CardBody className="w-full flex flex-col items-center justify-center">
                <CardHeader className="w-full flex items-center justify-center text-white">
                  <Avatar
                    name="Debora Viana"
                    alignSelf={"center"}
                    src="https://media.licdn.com/dms/image/D5603AQGOeFEWRQGq3w/profile-displayphoto-shrink_200_200/0/1684949111534?e=1718236800&v=beta&t=DcioNBgIahh0lQt8fQpTLYzV97Tk0KzqieD28yzX40w"
                    size={{ base: "sm", sm: "lg" }}
                  />
                </CardHeader>
                <Text className="w-full md:w-4/5 xl:w-2/4 text-lg md:text-xl pt-2 text-white">
                  "Leo is an incredible person who chases his goals despite obstacles. His ability to absorb knowledge about what he wants to learn is beautiful — and while learning, he still dedicates his time to help others. An example to follow as both a professional and a human being."
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-base md:text-3xl text-white w-full">
                  ~ Debora Viana – Graphic Designer / CEO at DebSigner <br />
                  <span className="text-green-400 font-bold">
                    @
                    <Link
                      className="underline decoration-green-400"
                      href={"http://linkedin.com/in/débora-viana-294b20272"}
                      target="_blank"
                    >
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
