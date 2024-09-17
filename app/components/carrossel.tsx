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
import goldHunt from "../assets/images/goldHunt.jpeg";
import havFinder from '../assets/images/havfinder.jpeg'
import debsigner from "@/app/assets/images/debsigner.png";
import franCar from "@/app/assets/images/MacBook Pro-1717340115455.jpeg";
import Link from "next/link";
import { BiLogoGithub, BiWorld } from "react-icons/bi";
import { dm } from "../fonts/dm-sans";

const Carrossel = () => {
  return (
    <div className="p-5 flex justify-center w-4/5 self-center">
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
                Foi o meu primeiro projeto como freelancer, e estou muito
                orgulhoso disso. Conta a história e o arsenal de trabalho de uma
                designer gráfica muito talentosa.
              </p>{" "}
              <br />
              <Image
                className="border border-white/20"
                src={debsigner}
                alt="debsignersite"
              />
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
                          Site Oficial <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://github.com/sousalmdev/debsigner"}
                          className="flex items-center gap-1"
                        >
                          Repositório no Github <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-debpink transition-all text-center bg-debpink/50 py-1 rounded px-4">
                    Ver Projeto
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>

            <CarouselItem className="w-full">
              <h1 className={`flex text-3xl md:text-5xl ${dm.className} `}>
                Gold<span className="text-yellow-500">Hunt</span>
              </h1>
              <br />
              <p
                className={`w-full md:w-full text-base h-auto md:text-3xl font-bold text-yellow-500 `}
              >
                Um jogo que envolve a estética de GTA V, onde consiste em
                acertar 10 letras aleatórias em um tempo limitado (20 segundos),
                você vai testar suas habilidades lógicas e se divertir ao mesmo
                tempo!
              </p>{" "}
              <br />
              <Image
                className="border border-white/20"
                src={goldHunt}
                alt="Gold Hunt"
              />
              <br />
              <div className="flex items-center w-full justify-center">
                <Popover>
                  <PopoverContent
                    className={`flex flex-col items-center mt-2 bg-black backdrop-blur-md border-yellow-500 text-yellow-500 `}
                  >
                    <ul className="w-11/12 flex flex-col items-center justify-evenly">
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://cidade-alta-game.vercel.app/"}
                          className="flex items-center gap-1"
                        >
                          Site Oficial <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={
                            "https://github.com/sousalmdev/teste-cidade-alta"
                          }
                          className="flex items-center gap-1"
                        >
                          Repositório no Github <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-yellow-500 transition-all text-center bg-yellow-500/50 py-1 rounded px-4">
                    Ver Projeto
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
                Meu aplicativo Angular feito para venda fictícia de carros, usando a stack híbrida: Angular + Tailwind, que funcionou muito bem. O app inclui: Primeira Tela, Exibição de Veículos, Detalhes do Veículo e Aquisição de Veículos.
              </p>{" "}
              <br />
              <Image
                className="border border-white/20"
                src={franCar}
                alt="francar"
              />
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
                          Site Oficial <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://github.com/sousalmdev/FranCar"}
                          className="flex items-center gap-1"
                        >
                          Repositório no Github <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-white hover:text-black transition-all text-center bg-black py-1 border border-white/20 rounded px-4">
                    Ver Projeto
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full">
              <h1 className={`flex text-3xl md:text-5xl ${dm.className} `}>
                Hav<span className="text-green-500">Finder</span>
              </h1>
              <br />
              <p
                className={`w-full md:w-full text-base h-auto md:text-3xl font-bold text-green-500 `}
              >
                Este aplicativo ajuda você a encontrar pessoas ao redor do mundo, de acordo com as coordenadas geográficas, e você poderá ver as informações delas em um mapa que o aplicativo fornece. Além disso: Você pode enviar seus dados ao site e fazer parte do banco de dados, o mapa também incluirá suas informações.
              </p>{" "}
              <br />
              <Image
                className="border border-white/20"
                src={havFinder}
                alt="havFinder"
              />
              <br />
              <div className="flex items-center w-full justify-center">
                <Popover>
                  <PopoverContent
                    className={`flex flex-col items-center mt-2 bg-black backdrop-blur-md border-green-500 text-green-500 `}
                  >
                    <ul className="w-11/12 flex flex-col items-center justify-evenly">
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={"https://havira-teste.vercel.app/"}
                          className="flex items-center gap-1"
                        >
                          Site Oficial <span>{BiWorld(Icon)}</span>{" "}
                        </Link>
                      </li>
                      <Divider stroke={"black"} />
                      <li className="p-1">
                        <Link
                          target="_blank"
                          href={
                            "https://github.com/sousalmdev/havira-test"
                          }
                          className="flex items-center gap-1"
                        >
                          Repositório no Github <span>{BiLogoGithub(Icon)}</span>
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                  <PopoverTrigger className="text-white hover:bg-green-500 transition-all text-center bg-green-500/50 py-1 rounded px-4">
                    Ver Projeto
                  </PopoverTrigger>
                </Popover>
              </div>
            </CarouselItem>
         
          </CarouselContent>
          <CarouselPrevious className="bg-white hover:bg-white/50 transition-all  text-black border-none sm:flex hidden" />
          <CarouselNext className="bg-white hover:bg-white/50 transition-all   text-black border-none  sm:flex hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carrossel;
