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
            bg={"#171717"}
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
                  'Leo é um cara muito esforçado e produtivo, suas habilidades para aprender o suficiente para trabalhar com algo diferente são impressionantes, uma comunicação "fora da caixa", o que faz as pessoas não precisarem perguntar uma vez mais.'
                </Text>
              </CardBody>
              <CardFooter>
                <Text className="text-center text-sm md:text-2xl w-full text-white">
                  ~ Lucas Fonseca - Desenvolvedor Full Stack <br />
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
            bg={"#171717"}
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
                  'Leo é um excelente desenvolvedor. Ele tem grande dedicação e cuidado com seus projetos, bem como uma rápida capacidade de adaptação ao uso de diferentes tecnologias.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Victor Lucena - Desenvolvedor Angular + Java <br />
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
            bg={"#171717"}
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
                  'Leo é um programador habilidoso, para ele, não há trabalho fácil ou difícil. Há algo a ser feito. Ele é o tipo de pessoa viciada em tecnologia que pode aprender qualquer coisa se tiver o tempo para isso. É impressionante.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Matheus Santana - Engenheiro de Software <br />
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
            bg={"#171717"}
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
                  'Leo é uma pessoa incrível, que persegue seus objetivos apesar dos obstáculos, sua capacidade de absorver conhecimento sobre o que quer aprender é algo bonito. E ao mesmo tempo que aprende, ele dedica seu tempo para ajudar quem precisa. Um exemplo a ser seguido como pessoa e profissional.'
                </Text>
              </CardBody>{" "}
              <CardFooter>
                <Text className="text-sm md:text-2xl text-white w-full">
                  ~ Debora Viana - Designer Gráfico / CEO da DebSigner <br />
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
