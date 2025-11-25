"use client";

import React from "react";
import { Card, CardBody, CardFooter, Avatar, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const stars = Array(5).fill(0);

export const PeopleCard = () => {
  const testimonials = [
    {
      name: "Lucas Fonseca",
      user: "lucasrlfonseca",
      role: "Full Stack Developer",
      img: "https://media.licdn.com/dms/image/D4D03AQHj5xU6lZ7e2Q/profile-displayphoto-shrink_200_200/0/1712514674464?e=1718236800&v=beta&t=tkJHMlOVj-Lg3-yQ8F5o4CY4PEVZz2J0w0WWC67vtGA",
      comment:
        "Leo is extremely hardworking and productive. His ability to learn exactly what he needs to tackle new challenges is impressive. His communication is truly 'out of the box'.",
      link: "https://www.linkedin.com/in/lucasrlfonseca/",
    },
    {
      name: "Victor Lucena",
      user: "victorlucena",
      role: "Angular + Java Developer",
      img: "https://media.licdn.com/dms/image/D4D03AQFie6xxIO--PA/profile-displayphoto-shrink_800_800/0/1711505643258?e=1717632000&v=beta&t=Y_rkuiVfs_yX4NgtJZz4-oNprsoijlC8ldiG-MtpavE",
      comment:
        "Leo is an excellent developer. He shows great dedication and care for his projects, along with fast adaptability to different technologies.",
      link: "https://www.linkedin.com/in/victor-lucena-2ba1b6175/",
    },
    {
      name: "Matheus Santana",
      user: "omatheussant",
      role: "Software Engineer",
      img: "https://media.licdn.com/dms/image/D4D03AQElQtSZ1iN1rQ/profile-displayphoto-shrink_800_800/0/1696209508879?e=1717632000&v=beta&t=PiRqMIk3UuLs5sVLvRHDhW8n4Wz71l_pm9KOiIa71nY",
      comment:
        "Leo is a highly skilled developer. For him, there’s no easy or hard task — there’s only what needs to be done. A tech-driven mind that learns anything if given time.",
      link: "https://www.linkedin.com/in/omatheussant/",
    },
    {
      name: "Debora Viana",
      user: "deboraviana",
      role: "Graphic Designer / CEO at DebSigner",
      img: "https://media.licdn.com/dms/image/D5603AQGOeFEWRQGq3w/profile-displayphoto-shrink_200_200/0/1684949111534?e=1718236800&v=beta&t=DcioNBgIahh0lQt8fQpTLYzV97Tk0KzqieD28yzX40w",
      comment:
        "Leo is an incredible person who chases his goals despite obstacles. His hunger to learn is beautiful — and he still helps others along the way. A true example.",
      link: "http://linkedin.com/in/débora-viana-294b20272",
    },
  ];

  return (
    <div className="w-full flex justify-center py-10 md:py-20">
      <ul
        className="
          w-full md:w-4/5 
          flex flex-col gap-10
          md:grid md:grid-cols-2 md:gap-8
        "
      >
        {testimonials.map((p, i) => (
          <li key={i} className="group w-full">
            <Card
            border={'1px'}
            borderColor={'#23f392'}
              bg="#171717"
              className="
                w-full 
                flex flex-col items-center 
                rounded-xl 
                p-5 
                border 
                border-[#23F392]
                transition-all
                duration-300
                grayscale
                group-hover:grayscale-0
                group-hover:scale-[0.98]
              "
            >
              <CardBody className="flex flex-col items-center text-center gap-3">
                <div className="transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105">
                  <Avatar name={p.name} src={p.img} size="lg" />
                </div>

                <Text className="text-white text-xl font-bold">{p.name}</Text>

                <Link
                  href={p.link}
                  target="_blank"
                  className="text-[#23F392] text-base font-medium underline"
                >
                  @{p.user}
                </Link>

                <Text className="text-white text-sm opacity-80 -mt-1">
                  {p.role}
                </Text>

                <Text className="text-white text-base leading-relaxed mt-2">
                  “{p.comment}”
                </Text>

                <div className="flex gap-1 pt-1">
                  {stars.map((_, i) => (
                    <FaStar key={i} color="#23F392" size={18} />
                  ))}
                </div>
              </CardBody>

              <CardFooter />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
