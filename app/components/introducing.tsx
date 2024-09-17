/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { dm } from "../fonts/dm-sans";
import skillset from "@/app/assets/Untitled.svg";
import Image from "next/image";
import jost from '../layout'
export const Introducing = () => {
  return (
    <>
      <div
        id="#presentation"
        className="animate-fade-in-bottom py-12 text-left w-11/12 md:w-full"
      >
        <h2
          className={`w-fit px-2 bg-green-400 text-black md:text-lg text-sm tracking-wider font-bold`}
        >
          OLÁ, MEU NOME É LEO E EU SOU UM
        </h2>
        <br />
        <h1 className={`text-3xl md:text-6xl ${dm.className}`}>
          Desenvolvedor Front End/UI <br /> 

        </h1>
        <h2 className = {`text-2xl md:text-5xl md:pt-5 text-green-400 italic font-black`}>(E Designer Gráfico)</h2>
        <br />
        <br />
        <p
          className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl text-lg font-light `}
        >
          Desde a minha primeira introdução à programação, venho dedicando meus
          dias a resolver problemas e traduzir ideias em código, fique à vontade
          para ver isso acontecendo.
        </p>
      </div>
    </>
  );
};
