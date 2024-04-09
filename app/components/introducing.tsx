/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { dm } from "../fonts/dm-sans";
import skillset from "@/app/assets/Untitled.svg";
import Image from "next/image";

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
          HELLO, MY NAME IS LEO AND I'M A
        </h2>
        <br />
        <h1 className={`text-3xl md:text-6xl ${dm.className}`}>
          Front End / UI
          <br />
          Developer.
        </h1>
        <br />
        <p
          className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl text-lg font-light `}
        >
          Since my very first contact, I've been dedicating my days to solve
          problems and translate ideas into code, feel free to see how it goes.
        </p>
      </div>
    </>
  );
};
