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
import houses8 from "@/app/assets/images/Captura de tela 2024-03-28 175004.png";
import debsigner from "@/app/assets/images/debsigner.png";
import franCar from "@/app/assets/images/MacBook Pro-1717340115455.jpeg";
import Link from "next/link";
import {
  BiLogoGithub,
  BiWorld
} from "react-icons/bi";
import { dm } from "../fonts/dm-sans";

const Carrossel = () => {
  return (
    <div className="py-5 justify-center w-11/12 md:w-4/5  self-center">
      <div className="w-full flex justify-center items-center">
        <Carousel className="w-3/4 md:self-start self-center ">
          <CarouselContent>
            <CarouselItem className="w-full">
              <h1 className={`flex text-3xl md:text-5xl ${dm.className} `}>
                <span className="text-debpink">Deb</span>signer
              </h1>
              <br />
              <p
                className={`w-full md:w-full text-base h-auto md:text-3xl font-bold text-debpink `}
              >
                It was my very first freelancer project, and I'm really proud
                about this. It tells the story and the work arsenal of a very
                talented graphic designer.
              </p>{" "}
              <br />
              <Image className="border border-white/20"  src={debsigner} alt="debsignersite" />
              <br />
              <div className="flex items-center w-full justify-center">
                <Popover>
                  <PopoverContent
                    className={`flex flex-col items-center mt-2 bg-black backdrop-blur-md border-debpink text-debpink `}
                  >
                    <ul className="w-11/12 flex flex-col items-center justify-evenly">
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://debsignerofficial.vercel.app"}
                          className="flex items-center gap-1"
                        >
                          Official Website <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://github.com/sousalmdev/debsigner"}
                          className="flex items-center gap-1"
                        >
                          Github Repo <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-debpink transition-all text-center bg-debpink/50 py-1 rounded px-4">
                    See Project
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>

            <CarouselItem className="w-full">
              <h1 className={`flex text-3xl md:text-5xl ${dm.className} `}>
                Houses<span className="text-blue-400">8</span>
              </h1>
              <br />
              <p
                className={`w-full md:w-full text-base h-auto md:text-3xl font-bold text-blue-400 `}
              >
                This one was a improved and deployed job task for an USA
                enterprise, my first ever app using NextJS (and the first
                version was my first app using Angular).
              </p>{" "}
              <br />
              <Image className="border border-white/20" src={houses8} alt="houses8" />
              <br />
              <div className="flex items-center w-full justify-center">
                <Popover>
                  <PopoverContent
                    className={`flex flex-col items-center mt-2 bg-black backdrop-blur-md border-blue-400 text-blue-400 `}
                  >
                    <ul className="w-11/12 flex flex-col items-center justify-evenly">
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://houses8.vercel.app/"}
                          className="flex items-center gap-1"
                        >
                          Official Website <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://github.com/sousalmdev/nextask"}
                          className="flex items-center gap-1"
                        >
                          Github Repo <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-blue-400 transition-all text-center bg-blue-400/50 py-1 rounded px-4">
                    See Project
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full">
              <h1 className={` flex text-3xl md:text-5xl ${dm.className} `}>
                Fran<span className="text-white/50">Car</span>
              </h1>
              <br />
              <p
                className={`w-full md:w-full text-base h-auto md:text-3xl font-bold text-white `}
              >
                My Angular App made for non-real car selling, using the hybrid
                stack: Angular + Tailwind, which worked absolutely well. App
                includes: First-Screen, Vehicle Showcasing, Vehicle Details and
                Vehicle Acquisition.
              </p>{" "}
              <br />
              <Image className="border border-white/20" src={franCar} alt="francar" />
              <br />
              <div className="flex items-center w-full justify-center">
                <Popover>
                  <PopoverContent
                    className={`flex flex-col items-center mt-2 bg-black backdrop-blur-md border-white/20 text-white `}
                  >
                    <ul className="w-11/12 flex flex-col items-center justify-evenly">
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://fran-car.vercel.app/"}
                          className="flex items-center gap-1"
                        >
                          Official Website <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://github.com/sousalmdev/FranCar"}
                          className="flex items-center gap-1"
                        >
                          Github Repo <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-white hover:text-black transition-all text-center bg-black py-1 border border-white/20 rounded px-4">
                    See Project
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-white hover:bg-white/50 transition-all  text-black border-none" />
          <CarouselNext className="bg-white hover:bg-white/50 transition-all   text-black border-none" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrossel;
