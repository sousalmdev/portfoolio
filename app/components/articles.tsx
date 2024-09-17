/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Accordionn } from "./accordion";
import { dm } from "../fonts/dm-sans";

export const Articles = () => {
  return (
    <div className="animate-fade-in-bottom pb-10 text-left w-11/12 md:w-full">
      <h2
        className={`text-green-400 text-sm md:text-lg tracking-wider font-bold`}
      >
        'NEM SÓ DE CÓDIGO VIVERÁ O HOMEM', ENTÃO... BEM-VINDO AOS MEUS
      </h2>
      <br />
      <h1 className={`text-3xl md:text-6xl ${dm.className}`}>Artigos</h1>
      <br />
      <p
        className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl  text-lg font-light `}
      >
        À medida que 2023 foi passando, eu decidi escrever sobre o que sei, com o objetivo de ajudar tanto iniciantes quanto profissionais experientes com curiosidades ou lições que aprendi ao longo do caminho. Aqui estão apenas alguns:
      </p>
      <br />
      <Accordionn />
    </div>
  );
};
