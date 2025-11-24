/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/app/components/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/popover";
import { Divider, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { BiLogoGithub, BiWorld } from "react-icons/bi";
import { dm } from "../fonts/dm-sans";

import linfoMaster from "../assets/images/Screenshot_39.png";
import leoDev from "../assets/images/Screenshot_38.png";
import debsigner from "@/app/assets/images/debsigner.png";
import franCar from "@/app/assets/images/MacBook Pro-1717340115455.jpeg";

const PROJECTS = [
  {
    title: "LeoDev — Personal Website",
    description:
      "My official website: minimalist visuals, neon contrast, and smooth micro-interactions showcasing UX, motion, and frontend engineering with personality.",
    image: leoDev,
    website: "https://leodev.com.br",
    github: "https://github.com/sousalmdev",
  },
  {
    title: "Linfomaster Mentorship",
    description:
      "A strategic landing page created for a high-performance mentorship program. Clean aesthetic, persuasive structure, and conversion-focused design.",
    image: linfoMaster,
    website: "https://mentorialinfomaster.com.br/",
    github: "https://github.com/sousalmdev",
  },
  {
    title: "FranCar",
    description:
      "A hybrid Angular + Tailwind application designed for a fictional car dealership. Organized catalog, detailed pages, and a clean, functional interface.",
    image: franCar,
    website: "https://fran-car.vercel.app/",
    github: "https://github.com/sousalmdev/FranCar",
  },
  {
    title: "Debsigner",
    description:
      "A modern portfolio built for a graphic designer, featuring fluid navigation, visual storytelling, and a layout crafted to highlight projects with clarity and impact.",
    image: debsigner,
    website: "https://debsignerofficial.vercel.app",
    github: "https://github.com/sousalmdev/debsigner",
  },
];

const Carrossel = () => {
  return (
    <div className="p-5 flex justify-center w-4/5 self-center">
      <div className="w-full flex justify-center items-center">
        <Carousel className="w-3/4 md:self-start self-center">
          <CarouselContent>
            {PROJECTS.map((proj, index) => (
              <CarouselItem
                key={index}
                className="w-full flex flex-col items-center justify-center"
              >
                <h1
                  className={`flex text-3xl mx-auto text-center md:text-5xl ${dm.className} text-[#23F392]`}
                >
                  {proj.title}
                </h1>

                <br />

                <p className="w-3/5 md:text-xl mx-auto text-center text-base font-light text-[#D9D9D9]">
                  {proj.description}
                </p>

                <br />
                <div className="border border-[#23f392]">
                  <Image
                    quality={100}
                    loading="lazy"
                    src={proj.image}
                    alt={proj.title}
                  />
                </div>

                <br />

                <div className="flex items-center w-full justify-center">
                  <Popover>
                    <PopoverContent className="flex flex-col items-center mt-2 bg-[#171717] backdrop-blur-md border-[#23F392] text-[#D9D9D9]">
                      <ul className="w-11/12 flex flex-col items-center justify-evenly">
                        <li className="p-1">
                          <Link
                            target="_blank"
                            href={proj.website}
                            className="flex items-center gap-1"
                          >
                            Website <span>{BiWorld(Icon)}</span>
                          </Link>
                        </li>

                        <Divider stroke="#23F392" />

                        <li className="p-1">
                          <Link
                            target="_blank"
                            href={proj.github}
                            className="flex items-center gap-1"
                          >
                            GitHub <span>{BiLogoGithub(Icon)}</span>
                          </Link>
                        </li>
                      </ul>
                    </PopoverContent>

                    <PopoverTrigger
                      className="
              inline-flex items-center gap-2 text-sm
              bg-gradient-to-r from-[#23F392] to-[#0FFFC8]/80
              text-black font-semibold
              px-4 py-2 rounded-full
              hover:scale-105 active:scale-95
              transition-transform
              shadow-[0_0_20px_-5px_rgba(35,243,146,0.4)]
              "
                    >
                      View Project
                    </PopoverTrigger>
                  </Popover>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white hover:bg-white/50 transition-all text-black border-none sm:flex hidden" />
          <CarouselNext className="bg-white hover:bg-white/50 transition-all text-black border-none sm:flex hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrossel;
