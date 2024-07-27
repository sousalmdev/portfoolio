/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Carrossel from "./carrossel";
import { dm } from "../fonts/dm-sans";

export const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="animate-fade-in-bottom py-20 md:w-full w-11/12 text-left"
      >
        <h2 className={`text-green-400 tracking-wider font-bold`}>
          EVERY GOOD DEVELOPER HAS TO HAVE HIGH QUALITY
        </h2>
        <br />
        <h1 className={`text-4xl md:text-6xl ${dm.className}`}>Projects.</h1>
        <br />
        <p className=" w-full xl:w-2/5 md:w-4/5 sm:w-4/5 text-lg h-auto md:text-3xl font-light">
          Here are some of my most important projects, that I created for
        clients, companies, voluntary works, etc. Feel free to check them out!
        </p>
      </div>

      <section className="flex justify-center self-center">
        <Carrossel />
      </section>
    </>
  );
};
