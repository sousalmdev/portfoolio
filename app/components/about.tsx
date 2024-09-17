/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PeopleCard } from "./peopleCard";
import Image from "next/image";
import Leo from "@/app/assets/leo_image_base.png";
import { dm } from "../fonts/dm-sans";
export const About = () => {
  return (
    <>
      <div
        id="about"
        className="animate-fade-in-bottom pb-20 text-left w-11/12 md:w-full"
      >
        {" "}
        <div className="py-20 flex flex-col xl:flex-row items-center md:justify-between">
          <div className="">
            {" "}
            <h2
              className={`text-green-400 md:text-lg text-base tracking-wider font-bold`}
            >
              VOCÊ JÁ VIU O QUE EU POSSO FAZER, AGORA SAIBA MAIS SOBRE
            </h2>
            <br />
            <h1 className={` ${dm.className} text-3xl md:text-6xl `}>
              Quem Sou Eu
            </h1>
            <br />
            <p
              className={`text-left w-full xl:w-3/5 md:w-full sm:w-4/5 md:text-3xl text-base font-light `}
            >
              <span className="font-bold text-green-400">Meu nome é
              Leandro Medeiros de Sousa</span>, um desenvolvedor brasileiro, nascido no
              Rio de Janeiro. Meu primeiro contato com programação foi através
              do Curso CS50 de Harvard, onde conheci a linguagem C e a Lógica de
              Programação. <br /> <br /> Depois disso, me dediquei ao Desenvolvimento Front
              End, pois me sinto atraído pela arte e criatividade.
              Posteriormente, descobrindo que desenvolvimento front-end e design
              andavam lado a lado, decidi me dedicar também a esse segmento, e
              até então, só venho confirmando esta teoria.
            </p>
          </div>
          <br />

          <Image src={Leo.src} width={350} height={300} alt="Leo Sousa" />
        </div>
        <div className="pb-20">
          <h2
            className={`text-green-400 md:text-lg text-base tracking-wider font-bold`}
          >
            CONHEÇA MEUS
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl ${dm.className}`}>Hobbies</h1>
          <br />
          <p
            className={`text-left w-full xl:w-3/5 md:w-full sm:w-4/5 md:text-3xl text-lg font-light `}
          >
            <span className="font-bold text-green-400">Sou músico</span> desde
            2016, toco três instrumentos diferentes: Violão, Guitarra Elétrica e
            Baixo.{" "}
            <span className="font-bold text-green-400">
              Também gosto de cantar.{" "}
            </span>{" "}
            Tenho um gosto musical pessoal que inclui Metal, Bossa Nova, Samba,
            R&B e Jazz.
            <br />
            <br />
            Escrevo poesias desde 2018, abordando temas como amor, vida,
            mentiras e todos os seus mistérios.
            <br />
            <br />
            Sou um grande fã de futebol. Um apaixonado e torcedor do Flamengo.
            Uma vez Flamengo, sempre Flamengo.
            <br />
            <br />
            Sou um frequentador de academia. Já se passaram dois anos
            desde que comecei, e nunca quis parar desde então. Isso ajuda tanto
            meu corpo quanto minha mente. Por que eu deveria parar?
          </p>
        </div>
        <h2
          className={`text-green-400 md:text-lg text-base tracking-wider font-bold`}
        >
          FALAR SOBRE MIM É FÁCIL, <br />
          VOCÊ PODE ESTAR QUERENDO SABER
        </h2>
        <br />
        <h1 className={` ${dm.className} text-3xl md:text-6xl `}>
          O que as pessoas pensam
          <br />
          Sobre mim?
        </h1>
        <PeopleCard />
      </div>
    </>
  );
};
